const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.send("Index route");
});
router.get("/:id", (req, res) => {
  res.send("Get for posts");
});
router.post("/", (req, res) => {
  res.send("Post for posts");
});
router.delete("/:id", (req, res) => {
  res.send("Get for posts");
});

module.exports = router;
