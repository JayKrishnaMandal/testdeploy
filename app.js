// Import the express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen();
