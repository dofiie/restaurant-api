import express from "express";
import logger from "./middleware/logger.js";
import handler404 from "./middleware/404handler.js";
import errorHandler from "./middleware/errorHandler.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Restaurant API");
});

app.use(express.json());
app.use(logger);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);
app.use("/auth", authRoutes);

app.use(handler404);
app.use(errorHandler);

export default app;