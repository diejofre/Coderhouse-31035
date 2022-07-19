const app = require("express")();
const handlebars = require("express-handlebars");

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs"); // registra el motor de plantillas
app.set("views", "./views"); // especifica el directorio de vistas

app.get("/", function (req, res) {
  const datos = {
    nombre: "Joaquin",
    apellido: "Bruhn",
    edad: "24",
    email: "joaco@mail",
    telefono: "12451245",
  };

  res.render("main", datos);
});

app.listen(8080, () => console.log("Server up"));
