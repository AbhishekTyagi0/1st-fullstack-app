const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Abhishek",
    added: new Date(),
  },
  {
    text: "Hello!, How are you?",
    user: "Akansha",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

router.get("/new", function (req, res, next) {
  console.log("Accessing /new route");
  res.render("form", { title: "New Message Form" });
});

router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.authorName;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

module.exports = router;
