import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.MONGO || "").then(() => {
  app.listen(process.env.PORT, () =>
    console.log(
      `Server has been started on port http://localhost:${process.env.PORT}`
    )
  );

  console.log("Connected with MongoDB");
});
