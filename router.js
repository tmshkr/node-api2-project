const express = require("express");
const router = express.Router();
const db = require("./data/db");

router.post("/", (req, res) => {
  const { title, contents } = req.body;
  if (!(title && contents)) {
    return res.status(400).json({
      errorMessage: "Please provide title and contents for the post.",
    });
  }
  db.insert({ title, contents })
    .then((id) => res.status(201).json(id))
    .catch((err) =>
      res.status(500).json({
        error: "There was an error while saving the post to the database",
      })
    );
});

router.post("/:id/comments", async (req, res) => {
  const post_id = Number(req.params.id);
  const { text } = req.body;

  if (!text)
    return res
      .status(400)
      .json({ errorMessage: "Please provide text for the comment." });

  const post = await db.findById(post_id);
  if (!post.length)
    return res
      .status(404)
      .json({ message: "The post with the specified ID does not exist." });

  db.insertComment({ post_id, text })
    .then((id) => res.status(201).json(id))
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: "There was an error while saving the comment to the database",
      });
    });
});

router.get("/", (req, res) => {
  db.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((post) => {
      if (!post.length)
        return res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      res.status(200).json(post);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});
router.get("/:id/comments", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
