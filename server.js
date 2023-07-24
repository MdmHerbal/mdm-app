import express from "express";
import dotenv from "dotenv";
import Color from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
// configure env
dotenv.config();

// database config
connectDB();

// rest Objeect
const app = express();

// Set the maximum header size
app.set("maxHttpHeaderSize", 10485760);

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send({message: "welcome e commerce app"});
});

const port = process.env.PORT || 8080;
// console.log(process.env.PORT);

app.listen(port, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
