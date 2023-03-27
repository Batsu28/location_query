import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_CONFIG_URL)
  .then(() => {
    console.log("connect");
  })
  .catch(() => {
    console.log("error");
  });

export default mongoose.connection;
