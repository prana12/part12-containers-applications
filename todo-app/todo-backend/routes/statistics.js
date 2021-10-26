const express = require("express");
const { getAsync } = require("../redis");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const statistics = await getAsync("added_todos");
    if (statistics) {
      res.json({ added_todos: statistics });
    } else {
      res.status(400).send("no statistics found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;