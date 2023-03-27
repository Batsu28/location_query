import express from "express";
import cors from "cors";
import "./config/mongoose-config.js";
import resturantRoutes from "./routes/restaurant-api.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(resturantRoutes);

app.listen(port, () => {
  console.log("server running:", port);
});
