const express = require("express");
const app = express();

const fs = require("fs");
// defino el motor de plantilla
app.engine("cte", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content
      .toString()
      .replace("^^titulo$$", "" + options.titulo + "")
      .replace("^^mensaje$$", "" + options.mensaje + "")
      .replace("^^autor$$", "" + options.autor + "")
      .replace("^^version$$", "" + options.version + "")
      .replace("^^nombre$$", "" + options.nombre + "")
      .replace("^^apellido$$", "" + options.apellido + "")
      .replace("^^date$$", "" + options.date + "");
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // especifica el directorio de vistas
app.set("view engine", "cte"); // registra el motor de plantillas

app.get("/cte1", function (req, res) {
  const datos = {
    titulo: "Prueba de plantilla",
    mensaje: "Este es un mensaje",
    autor: "Diego",
    version: "2.1",
  };

  res.render("plantilla1", datos);
});

app.get("/cte2", function (req, res) {
  const datos = {
    nombre: "Pepe",
    apellido: "Sand",
    date: "2022-07-18",
  };

  res.render("plantilla2", datos);
});

app.listen(8080, () => console.log("Server up"));
