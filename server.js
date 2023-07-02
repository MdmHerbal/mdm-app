import express from "express";
import colors from "colors";
import dotenv from "dotenv";

const app = express();

// configure env
dotenv.config();

app.get("/", (req, res) => {
  res.send({
    message: "welcome e commerce app",
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at ${port}`.bgCyan.bgWhite);
});
