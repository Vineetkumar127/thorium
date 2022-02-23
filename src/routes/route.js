const express = require('express');
const router = express.Router();
const logger = require("../logger/logger")

router.get('/test-me', function (req, res) {
    logger.printWelcomeMessage()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My first API')
});
module.exports = router;