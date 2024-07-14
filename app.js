require("dotenv").config();
require("express-async-errors");
const authRoute = require("./route/userRouter");
const morgan = require("morgan");
const port = process.env.PORT || 5000;

//express
const express = require("express");
const app = express();
//database
const connectDB = require("./db/connect");
//midlewares

const notFoundMiddleware = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.app.use(morgan("tiny"));
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/vi/auth", authRoute);
//errors
app.use(notFoundMiddleware);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
