import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config(notFound);
connectDB(errorHandler);
const app = express();

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/products", productRoutes);
//error not found middleware
app.use(notFound);

// error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  process.env.PORT,
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  )
);
