const express = require("express");
const app = express();
const port = 8080;

let visitas = 0;
app.get("/", (req, res) => {
  res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>');
});

app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`<h1 style="color:red;">${visitas}</h1>`);
});

app.get("/fyh", (req, res) => {
  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString();
  res.send({ fyh: `la fecha es ${fecha} la hora es ${hora}` });
});

const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
