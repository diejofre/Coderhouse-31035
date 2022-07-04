//Ejemplo sincrónico
// const fs = require("fs");

// try {
//   const date = new Date();
//   fs.writeFileSync("fyh.txt", date.toString());
//   fs.readFileSync("\fyh.txt", "utf-8");
// } catch (error) {
//   console.log(error);
//   throw new Error(error);
// }

// Ejemplo usando callback
// const ruta = "./package.json";
// const stats = fs.statSync(ruta);
// fs.readFile(ruta, "utf-8", (err, contenido) => {
//   if (err) throw new Error(`No se puede leer el archivo: ${err.message}`);

//   const info = {
//     contenidoStr: JSON.stringify(contenido),
//     contenidoObj: JSON.parse(contenido),
//     size: `${stats.size} bytes`,
//   };
//   console.log(info);

//   fs.writeFile("info.txt", JSON.stringify(info, null, 2), (err) => {
//     if (err) {
//       console.log(err);
//       throw new Error(err);
//     }
//     console.log("Archivo creado");
//   });
// });

// Ejemplo usando promises
const fs = require("fs");

const prueba = async () => {
  try {
    const contenido = await fs.promises.readFile("./info.txt", "utf-8");
    console.log(contenido);
    const objInfo = JSON.parse(contenido);
    objInfo.contenidoObj.author = "Coderhouse";
    await fs.promises.writeFile(
      "./package.json.coder",
      JSON.stringify(objInfo, null, 2)
    );
  } catch (err) {
    throw new Error("Error");
  }
};

prueba();
console.log("TEST");
