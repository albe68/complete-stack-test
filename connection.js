const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/elora", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });