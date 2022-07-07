const http = require("http");

const server = http.createServer((peticion, respuesta) => {
  let rta = "";
  const now = new Date();

  if (now.getHours() >= 6 && now.getHours() <= 12) rta = "Buenos Días";

  if (now.getHours() >= 13 && now.getHours() <= 19) rta = "Buenas tardes";

  if (now.getHours() >= 20 || now.getHours() <= 5) rta = "Buenas noches";

  respuesta.end(rta);
});

const connectedServer = server.listen(8080, () => {
  console.log(
    `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
  );
});
