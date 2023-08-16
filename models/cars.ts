import mongoose, { Schema, models } from "mongoose";

const carSchema = new Schema(
  {
    car: {
      type: Object,
    },
    model: {
      type: String,
    },
    photo: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Car = models.Car || mongoose.model("Car", carSchema);
export default Car;
