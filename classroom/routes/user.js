const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.send("Index route");
});
router.get("/:id", (req, res) => {
  res.send("Get for users");
});
router.post("/", (req, res) => {
  res.send("Post for users");
});
router.delete("/:id", (req, res) => {
  res.send("Get for users");
});

module.exports = router;
