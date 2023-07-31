package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Define a struct to represent your data
type MyData struct {
	Title   string `json:"title"`
	Content string `json:"content"`
	Link    string `json:"link"`
}

func main() {
	// Read the JSON file
	file, err := os.Open("articles_data.json")
	if err != nil {
		log.Fatal("Error opening the file:", err)
	}
	defer file.Close()

	byteValue, err := ioutil.ReadAll(file)
	if err != nil {
		log.Fatal("Error reading the file:", err)
	}

	// Unmarshal the JSON data into a slice of MyData
	var data []MyData
	err = json.Unmarshal(byteValue, &data)
	if err != nil {
		log.Fatal("Error unmarshaling JSON data:", err)
	}

	// Connect to MongoDB
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	// Check the connection
	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal("Error pinging MongoDB:", err)
	}

	fmt.Println("Connected to MongoDB!")

	// Access the collection
	collection := client.Database("summarized_news").Collection("news_articles")

	// Insert data into MongoDB, checking for duplicates
	for _, d := range data {
		filter := bson.D{{"title", d.Title}}
		var existingData MyData
		err := collection.FindOne(context.Background(), filter).Decode(&existingData)
		if err == nil {
			fmt.Println("Article already exists, skipping:", d.Title)
			continue
		}

		_, err = collection.InsertOne(context.Background(), d)
		if err != nil {
			log.Fatal("Error inserting data into MongoDB:", err)
		}
		fmt.Println("Inserted data:", d)
	}

	// Close the connection
	err = client.Disconnect(context.Background())
	if err != nil {
		log.Fatal("Error disconnecting from MongoDB:", err)
	}
	fmt.Println("Disconnected from MongoDB!")
}
