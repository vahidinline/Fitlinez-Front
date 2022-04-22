import mongoose from "mongoose";
import React from "react";

mongoose
  .connect(
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));
