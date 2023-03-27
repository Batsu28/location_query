import express from "express";
import RestaurantModel from "../models/restaurant-model.js";

const resturantRoutes = express.Router();

resturantRoutes.post("/nearrestaurant", async function (req, res) {
  const currentLocation = req.body;
  console.log(currentLocation);
  const nearestRestaurant = await RestaurantModel.find({
    "address.coord": {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 100,
      },
    },
  })
    .select({ name: 1 })
    .exec();
  res.send(nearestRestaurant);
});

export default resturantRoutes;
