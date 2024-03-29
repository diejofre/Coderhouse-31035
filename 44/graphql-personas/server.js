import express from "express";
import { graphqlHTTP } from "express-graphql";
import crypto from "crypto";
import schema from "./graphql/buildSchema.js";

class Persona {
  constructor(id, { nombre, edad }) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
}

const personasMap = {};

function getPersonas({ campo, valor }) {
  const personas = Object.values(personasMap);
  if (campo && valor) {
    return personas.filter((p) => p[campo] == valor);
  } else {
    return personas;
  }
}

function getPersona({ id }) {
  if (!personasMap[id]) {
    throw new Error("Persona not found.");
  }
  return personasMap[id];
}

function createPersona({ datos }) {
  const id = crypto.randomBytes(10).toString("hex");
  const nuevaPersona = new Persona(id, datos);
  personasMap[id] = nuevaPersona;
  return nuevaPersona;
}

function updatePersona({ id, datos }) {
  if (!personasMap[id]) {
    throw new Error("Persona not found");
  }
  const personaActualizada = new Persona(id, datos);
  personasMap[id] = personaActualizada;
  return personaActualizada;
}

function deletePersona({ id }) {
  if (!personasMap[id]) {
    throw new Error("Persona not found");
  }
  const personaBorrada = personasMap[id];
  delete personasMap[id];
  return personaBorrada;
}

const app = express();

app.use(express.static("public"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getPersonas,
      getPersona,
      createPersona,
      updatePersona,
      deletePersona,
    },
    graphiql: true,
  })
);

const PORT = 8080;
app.listen(PORT, () => {
  const msg = `Servidor corriendo en puerto: ${PORT}`;
  console.log(msg);
});
