import express from "express";
const app = express();
const category = require("@app/routes/CategoryRoutes/category.routes");
const portfolio = require("@app/routes/PortfolioRoutes/portfolio.routes");

app.use(express.json());

// Config
require("dotenv").config();
  
app.use("/api", category);
app.use("/api", portfolio);

module.exports = app;