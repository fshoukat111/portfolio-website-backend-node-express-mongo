import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { CategoryRoutes, PortfolioRoutes, UserRoutes } from "@app/routes";
import errorMiddleware from "@app/middleware/errors";
import cors from "cors";
export const app = express();

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", PortfolioRoutes);
app.use("/api/v1", UserRoutes);

app.use(errorMiddleware);
