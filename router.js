const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {});
router.post("/:id/comments", (req, res) => {});

router.get("/", (req, res) => {});
router.get("/:id", (req, res) => {});
router.get("/:id/comments", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
