const express = require("express");
const cors = require("cors");
const server = express();
const router = require("./router");

server.use(express.json());
server.use(cors());
server.use("/api/posts", router);

server.get("/", (req, res) => {
  res.json({ api: "running..." });
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on ${port}...`);
});
