const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:7AQMt2IhTYi9vNsD@cluster0.0hdus1m.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })  
  .catch((err) => console.log(err));
  // 7AQMt2IhTYi9vNsD