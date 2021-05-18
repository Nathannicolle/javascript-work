const http = require("http");
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
  res.end("Mon premier serveur !");
};

const serveur = http.createServer(requestListener);
serveur.listen(port, host, () => {
  console.log("Le serveur tourne");
});
