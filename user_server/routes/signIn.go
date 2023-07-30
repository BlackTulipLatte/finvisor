package routes

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
	_ "github.com/lib/pq"
	"github.com/joho/godotenv"
	"os"
)

func respondWithError(w http.ResponseWriter, message string, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	response := map[string]string{"error": message}
	jsonResponse, _ := json.Marshal(response)
	w.Write(jsonResponse)
}

func SignInHandler(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// HTTP validation
	err := godotenv.Load()
	if err != nil {
		respondWithError(w, "Failed to load environment variables", http.StatusInternalServerError)
		return
	}

	secretKey := os.Getenv("JWT_TOKEN")

	if r.Method != http.MethodPost {
		respondWithError(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var data map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		respondWithError(w, "Failed to parse JSON", http.StatusBadRequest)
		return
	}

	// Check if user exists in the database
	query := "SELECT COUNT(*) FROM accounts WHERE email = $1 AND password = $2"
	var count int
	row := db.QueryRow(query, data["email"], data["password"])
	if err := row.Scan(&count); err != nil {
		respondWithError(w, "Failed to check if user exists in the database", http.StatusInternalServerError)
		return
	}

	if count == 0 {
		respondWithError(w, "Invalid email or password", http.StatusUnauthorized)
		return
	}

	// Generate JWT token
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["email"] = data["email"]
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix() // Token expires in 24 hours

	// Sign the token with the secret key
	tokenString, err := token.SignedString([]byte(secretKey))
	if err != nil {
		respondWithError(w, "Failed to generate JWT token", http.StatusInternalServerError)
		return
	}

	// Return the JWT token as a JSON response
	response := map[string]string{"token": tokenString}
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		respondWithError(w, "Failed to encode JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResponse)
}
