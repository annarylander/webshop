import { connect } from "mongoose";

export const setupMongoDb = async (url: string) => {
    console.log("Connecting to MongoDB...");
    await connect(url)
}