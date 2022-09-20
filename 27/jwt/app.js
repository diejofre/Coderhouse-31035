import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const PRIVATE_KEY = "coderhouse";

app.use(express.json());

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      error: "not authenticated",
    });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: "not authorized",
      });
    }
    req.user = decoded.data;
    next();
  });
}

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/api/protected", auth, (req, res) => {
  res.send("Estoy en /protected");
});

app.post("/api/login", (req, res) => {
  const { username, password, direccion } = req.body;
  //LOGIN
  const userForToken = {
    username,
    direccion,
  };
  const token = jwt.sign(userForToken, PRIVATE_KEY, { expiresIn: "60s" });
  res.json({
    token,
  });
});

app.listen(3000, () => {
  console.log("Server up");
});
