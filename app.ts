import express from "express";
const app = express();
const category = require("@app/routes/CategoryRoutes/category.routes");
const portfolio = require("@app/routes/PortfolioRoutes/portfolio.routes");
const user = require("@app/routes/UserRoutes/user.routes");

app.use(express.json());

// Config
if (process.env.NODE_ENV === "PRODUCTION") {
    require("dotenv").config({ path: "app/.env" });
}

app.use("/api", category);
app.use("/api", portfolio);
app.use("/api", user);

export {
    app,
} 