const express = require("express");

const Toons = require("../toons/toonsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running :D", environment: process.env.DB_ENV });
});

server.get("/toons", (req, res) => {
  Toons.getAll()
    .then(toons => {
      res.status(200).json(toons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
