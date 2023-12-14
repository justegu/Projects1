import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./config/database.js";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./controllers/users.controllers.js";

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Starting server
const startServer = () =>
  app.listen(PORT, () => console.log("Starting server on port: " + PORT));

// Database
connectDatabase(startServer);

// Routes
// -- GET /api/users - returns all users
app.get("/api/users", getUsers);

// -- POST /api/users - adds user
app.post("/api/users", addUser);

// -- PUT /api/users/:id - updates user by id
app.put("/api/users/:id", updateUser);

// -- DELETE /api/users/:id - deletes user by id
app.delete("/api/users/:id", deleteUser);
