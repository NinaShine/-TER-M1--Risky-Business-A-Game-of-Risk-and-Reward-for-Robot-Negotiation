const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
require("./config/db_conn.js");

const app = express();
const route = require("./routes/Route");

app.use(
  cors({
    origin: ["https://choice-quizz.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://choice-quizz.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret-key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: true, 
      httpOnly: true,
      sameSite: "None"
    }
  })
);


app.use((req, res, next) => {
  console.log(
    `📡 [${new Date().toISOString()}] Requête reçue : ${req.method} ${req.url}`
  );
  next();
});

app.use((req, res, next) => {
  console.log(`📡 Requête reçue : ${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  console.error("🔥 Erreur serveur détectée :", err);
  res.status(500).json({ error: "Erreur serveur", details: err.message });
});

app.use((req, res, next) => {
  console.log("📝 Cookies reçus :", req.headers.cookie);
  next();
});

app.use("/", route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
