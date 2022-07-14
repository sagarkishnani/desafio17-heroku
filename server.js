const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola, soy Sagar y tengo mi proyecto en Heroku");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
