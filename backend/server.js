import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  process.env.PORT,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
);