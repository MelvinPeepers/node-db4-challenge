const express = require("express");

const recipesRouter = require("../recipe/recipe-router.js");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send("<h3>Node-DB4-Challenge</h3>");
});

module.exports = server;