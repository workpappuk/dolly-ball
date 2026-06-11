import mongoose from "mongoose";
import { config } from "@/core/config";

let isConnected = false;

export async function connectMongo(): Promise<void> {
  if (isConnected) {
    return;
  }

  await mongoose.connect(config.mongodbUri, {
    maxPoolSize: 30,
    serverSelectionTimeoutMS: 5000,
  });

  isConnected = true;
}
