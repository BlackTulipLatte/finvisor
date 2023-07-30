package auth

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/golang-jwt/jwt"
	"os"
	"fmt"
)

func respondWithJSON(w http.ResponseWriter, data interface{}, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	jsonResponse, err := json.Marshal(data)
	if err != nil {
		http.Error(w, "Failed to encode JSON", http.StatusInternalServerError)
		return
	}
	w.Write(jsonResponse)
}

func AuthHandler(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// Load env
	err := godotenv.Load()
	if err != nil {
		respondWithJSON(w, map[string]string{"error": "Failed to load environment variables"}, http.StatusInternalServerError)
		return
	}
	secretKey := os.Getenv("JWT_TOKEN")

	// HTTP validation
	if r.Method != http.MethodPost {
		respondWithJSON(w, map[string]string{"error": "Invalid request method"}, http.StatusMethodNotAllowed)
		return
	}

	var data map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		respondWithJSON(w, map[string]string{"error": "Failed to parse JSON"}, http.StatusBadRequest)
		return
	}

	// Check if token is valid
	tokenString, ok := data["token"].(string)
	if !ok {
		respondWithJSON(w, map[string]string{"verified": "false"}, http.StatusBadRequest)
		return
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Validate the signing method
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// Return the secret key used to sign the token
		return []byte(secretKey), nil
	})

	if err != nil || !token.Valid {
		respondWithJSON(w, map[string]string{"verified": "false"}, http.StatusUnauthorized)
		return
	}

	// If the code reaches this point, the token is valid
	respondWithJSON(w, map[string]string{"verified": "true"}, http.StatusOK)
}
