import express, { Application, Request, Response } from "express";
const app: Application = express();

// type Persona = {
//   nombre: string;
//   edad: number;
// };

// const personas: Array<Persona> = [
//   {
//     nombre: "Pepito",
//     edad: 29,
//   },
//   {
//     nombre: "Pepe",
//     edad: 25,
//   },
// ];

// console.log(personas);

// interface saludar {
//   (name: string): string;
// }

// const saludar = (name: string) => {
//   return `Hola ${name}`;
// };

// console.log(saludar("Diego"));

interface IPersona {
  nombre: string;
  edad: number;
}

class Persona implements IPersona {
  public nombre: string;
  public edad: number;

  constructor() {
    this.nombre = "Pepe";
    this.edad = 25;
  }
}

interface Book {
  titulo: string;
  precio: number;
  paginas: number;
}

interface IBestSeller extends Book {
  ventaTotal: number;
}

app.get("/", function (req: Request, res: Response) {
  res.send("Hola mundo");
});

app.listen(3000, () => {
  console.log("Server up");
});
