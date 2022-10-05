const express = require("express");
const path = require("path");
const HTML = require("./Develop/Routes/HTML_Routes/index.js");
const API = require("./Develop/Routes/API_Routes/index");

const PORT = 3001;

const app = express();

app.use("/", HTML);
app.use("/api", API);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
