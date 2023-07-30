package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"example.com/myproject/routes"
	"example.com/myproject/auth"
	"github.com/rs/cors"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "postgres"
	dbname   = "finvisor"
)

var db *sql.DB

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {

	
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	var err error
	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Successfully connected to the database!")

	r := http.NewServeMux()

    // Register route handlers
    r.HandleFunc("/api/v1/signup", func(w http.ResponseWriter, r *http.Request) {
        routes.SignUpHandler(w, r, db)
    })
    r.HandleFunc("/api/v1/signin", func(w http.ResponseWriter, r *http.Request) {
        routes.SignInHandler(w, r, db)
    })

	// Register auth handler
	r.HandleFunc("/api/v1/auth", func(w http.ResponseWriter, r *http.Request) {
		auth.AuthHandler(w, r, db)
	})

    // Create CORS middleware with custom options
    c := cors.New(cors.Options{
        AllowedOrigins:   []string{"http://127.0.0.1:5173"},
        AllowedMethods:   []string{"POST", "GET", "OPTIONS", "PUT"},
        AllowedHeaders:   []string{"Accept", "Accept-Language", "Content-Type"},
        AllowCredentials: true,
        Debug:            true,
    })

    // Wrap the entire router with the CORS middleware
    handler := c.Handler(r)

    port := 3000
    log.Printf("Server started on port %d", port)
    log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), handler))
}