const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/app.routes"));

//Configure le port d'ecoute
app.listen(2000, function () {
  console.log("Serveur running on http://localhost:2000 Ready To Go...");
});
