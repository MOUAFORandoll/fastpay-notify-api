const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/app.routes"));

//Configure le port d'ecoute
app.listen(8083, function () {
  console.log("Serveur running on http://localhost:8083 Ready To Go...");
});
