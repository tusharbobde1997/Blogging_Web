const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comments = require("../models/Comments");

//CREATE Comments
router.post("/", async (req, res) => {
  const newComments = new Comments(req.body);
  try {
    const savedComments = await newComments.save();
    res.status(200).json(savedComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Comments
router.get("/", async (req, res) => {
  const postId = req.query.postId;
  try {
    let comments;
    if (postId) {
      comments = await Comments.find({ postId });
    } else if (catName) {
      comments = await Comments.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      comments = await Comments.find();
    }
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;