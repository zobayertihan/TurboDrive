import mongoose from "mongoose";

export const connectmongoDB = async () => {
  try {
    const mongoDB = process.env.MONGODB_URI;
    if (!mongoDB) {
      return console.log("MongoDB is not Defiened");
    }
    await mongoose.connect(mongoDB);
  } catch (error) {
    console.log("MongoDB is not Connected. Error: ", error);
  }
};

export const disconnectMongoDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB is disconnected");
  } catch (error) {
    console.log("Error while disconnecting from MongoDB:", error);
  }
};
