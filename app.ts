import express from "express";
import bodyParser from "body-parser";
import { 
  adminPortfolioRoutes,
  categoryAdminRoutes,
  categoryRoutes,
  portfolioRoutes,
  userRoutes } from "@app/routes";
import errorMiddleware from "@app/middleware/errors";
import cors from "cors";
export const app = express();

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);

app.use("/api/v1", categoryRoutes);
app.use("/api/v1", adminPortfolioRoutes);
app.use("/api/v1", categoryAdminRoutes);
app.use("/api/v1", portfolioRoutes);
app.use("/api/v1", userRoutes);

app.use(errorMiddleware);
