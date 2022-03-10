const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleWare= require("../Middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",MiddleWare.createmidd,MiddleWare.authorise, userController.getUserData)
router.put("/users/:userId", MiddleWare.createmidd,MiddleWare.authorise,userController.updateUser)
router.post("/users/:userId/posts", MiddleWare.createmidd,MiddleWare.authorise,userController.postMessage)
router.delete("/deleteuser/:userId",MiddleWare.createmidd,MiddleWare.authorise,userController.deleteUser)

module.exports = router;