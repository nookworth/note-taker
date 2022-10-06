const notes = require("./notes");
const router = require("express").Router();

router.use("/notes", notes);

module.exports = router;
