const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile("../../db/db.json").then((data) => res.json(JSON.parse(data)));
});

module.exports = router;
