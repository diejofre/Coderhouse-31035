import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
