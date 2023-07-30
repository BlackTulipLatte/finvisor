// routes.go

package routes

import (
    "database/sql"
    "encoding/json"
    "net/http"
    _ "github.com/lib/pq"
)

func SignUpHandler(w http.ResponseWriter, r *http.Request, db *sql.DB) {

    // HTTP validation
    if r.Method != http.MethodPost {
        http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
        return
    }

    var data map[string]interface{}
    if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
        http.Error(w, "Failed to parse JSON", http.StatusBadRequest)
        return
    }
    
    // Check if email and password are already in the db
    checkQuery := "SELECT COUNT(*) FROM accounts WHERE email = $1"
    var count int
    row := db.QueryRow(checkQuery, data["email"])
    if err := row.Scan(&count); err != nil {
        http.Error(w, "Failed to check if email exists in the database", http.StatusInternalServerError)
        return
    }

    if count > 0 {
        http.Error(w, "Email already exists", http.StatusConflict)
        return
    }

    // Add user to db
    query := "INSERT INTO accounts (email, password) VALUES ($1, $2)"
    _, err := db.Exec(query, data["email"], data["password"])
    if err != nil {
        http.Error(w, "Failed to insert data into the database", http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatusCreated)
}
