import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "This is an example of a route. Change this." });
});

export = router;
