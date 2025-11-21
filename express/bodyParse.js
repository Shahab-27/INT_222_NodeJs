import express from "express";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User data received");
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
