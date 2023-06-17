const http = require("http");
const router = require("./routes/blogRoute");
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

const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  // res.statusCode=200;
  // res.setHeader('Content-Type','text/plain');
  // res.end("hello world")
  console.log("hi", router);
  router(req, res);
});

server.listen(port, hostname, () => {
  console.log(server);
  console.log(`Server running at http://${hostname}:${port}/`);
});
