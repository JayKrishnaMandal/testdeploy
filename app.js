// Import the express module
const express = require("express");
// Import Prisma Client
const { PrismaClient } = require("@prisma/client");

// Create an instance of an Express application
const app = express();
// Create an instance of Prisma Client
const prisma = new PrismaClient();

// Define a route handler for the default home page
app.get("/", async (req, res) => {
  // Create a new user
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  });

  // Fetch all users
  const users = await prisma.user.findMany();
  res.json(users);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
