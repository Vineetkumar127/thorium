const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const Middleware =require("../Middleware/middleware")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", Middleware.createmidd,userController.getUserData)

router.put("/users/:userId",Middleware.createmidd, userController.updateUser)

router.delete("/deleteUser",Middleware.createmidd,userController.deleteUser)


module.exports = router;