const express = require("express");
const router = express.Router();

const bodyparser = require("body-parser")
var urlencodedparser = bodyparser.urlencoded({extended:false})

const {
  addArticle,
  editArticle,
  getArticles,
  deleteArticle,
  sendFeedback
} = require("../controller/crudController");

router.route("/addArticle").post(urlencodedparser,addArticle);
router.route("/editArticle").post(urlencodedparser,editArticle);
router.route("/getArticles").get(getArticles);
router.route("/deleteArticle").post(urlencodedparser,deleteArticle);
router.route("/sendFeedback").post(urlencodedparser,sendFeedback);

module.exports = router;
