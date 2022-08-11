const express = require("express");
const app = express();

const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

app.get("/cars", (req, res) => {
  knex
    .from("cars")
    .select("*")
    .orderBy("price", "desc")
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.get("/cars/:id", (req, res) => {
  const { id } = req.params;
  knex
    .from("cars")
    .select("*")
    .where({ id })
    .then((row) => {
      res.json(row);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.listen(3000);
