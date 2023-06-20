const http = require("http");
const router = require("./routes/blogRoute");
const mongoose = require("mongoose");
const connection=require("./connection") 

//db connection
connection();


const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  
  router(req, res);
  // res.end() // learn this  `
});

server.listen(port, hostname, () => {
  console.log(server);
  console.log(`Server running at http://${hostname}:${port}/`);
});
