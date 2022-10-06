const data = require("../../db/db.json");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.json(data);
  //   readFromFile("../../db/db.json").then((data) =>
  //     res.json(JSON.stringify(data))
  //   );
});

module.exports = router;
