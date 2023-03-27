import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    address: {
      coord: {
        type: { type: String, default: "Point" },
        coordinates: [Number],
      },
      building: String,
      street: String,
      zipcode: String,
    },
    borough: String,
    cuisine: String,
    name: String,
    grades: [],
    restaurant_id: String,
  },
  { collection: "restaurants" }
);

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
RestaurantModel.collection.createIndex({ coord: "2dsphere" });

export default RestaurantModel;
