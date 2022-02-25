import express from "express";
import { category,portfolio,user } from "@app/routes";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import cors from "cors";

export  const app = express();
const errorMiddleware = require("@app/middleware/errors");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: ".env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:4200"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", category);
app.use("/api/v1", portfolio);
app.use("/api/v1", user);

app.use(errorMiddleware);