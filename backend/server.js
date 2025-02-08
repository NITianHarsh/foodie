import express from "express";
import mongoose from "mongoose";
// import userRouter from './userRoute.js'
const server = express();
import "dotenv/config";

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(process.env.MONGOdb_URL);
    console.log("DB connected");
  } catch (err) {
    console.error("DB not connected:", err);
  }
}
main().catch((err) => console.error("Error in main():", err));

server.use(express.json())
server.use("/api/", userRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});
server.listen(process.env.PORT, () => {
  console.log(`Example app on port ${process.env.PORT}`);
});
