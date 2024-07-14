require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT || 5000;

//express
const express = require("express");
const app = express();
//database
const connectDB = require("./db/connect");
//midlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.send("Hello");
});
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
