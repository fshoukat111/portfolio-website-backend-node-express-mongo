import express from "express";
const app = express();
const category = require("@app/routes/CategoryRoutes/category.routes");
const portfolio = require("@app/routes/PortfolioRoutes/portfolio.routes");
const user = require("@app/routes/UserRoutes/user.routes");

app.use(express.json());

// Config
if (process.env.NODE_ENV == "PRODUCTION") {
    console.log("process.env.NODE_ENV ",process.env.NODE_ENV )
    require("dotenv").config({ path: "app/.env" });
}

app.use("/api/v1", category);
app.use("/api/v1", portfolio);
app.use("/api/v1", user);

export {
    app,
} 