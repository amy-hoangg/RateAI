import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
require('express-async-errors'); //a middleware for the Express web framework in Node.js that helps handle asynchronous errors in routes and middleware functions. I

import { connectToDatabase } from '../utils/db';
import { PORT } from '../utils/config';


import aiRouter from "./routes/ais";
import reviewRouter from "./routes/reviews";
import userRouter from "./routes/users";
import sellerRouter from "./routes/sellers";

/**
 * const { errorHandler } = require('./util/middleware')
app.use(express.json())
 */

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});
app.use("/api/ais", aiRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/users", userRouter);
app.use("/api/sellers", sellerRouter);


// app.use(errorHandler);

const start = async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } 
  
  catch (error) {
    console.error('Unable to start the server:', error);
  }
};

start().catch((error) => {
  console.error("Error starting the server:", error);
});

