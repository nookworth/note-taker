const path = require("path");
const express = require("express");
// const HTML = require("./Develop/Routes/HTML_Routes/index.js");
// const API = require("./Develop/Routes/API_Routes");
const data = require("./Develop/db/db.json");

const PORT = 3001;

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/", HTML);
// app.use("/api", API);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
);

app.get("/api/notes", (req, res) => {
  res.json(data);
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
