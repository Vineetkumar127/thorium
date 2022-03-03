const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/getBooks", bookController.getBooks  )

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publisherController.createPublisher  )

router.put("/books", bookController.updateBooks)

router.put("/updatePrice", bookController.updatePrice)


module.exports = router;