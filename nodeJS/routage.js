const http = require("http");
const express = require("express");
const host = "localhost";
const port = 800;
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  app.use(express.static("assets"));
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.post("/example", function (req, res) {
  res.send("Vous êtes bien sur la page exemple");
});

app.listen(port, host, () => {
  console.log("Le serveur test fonctionne");
});
