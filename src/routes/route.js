const express = require('express');
const router = express.Router();

//--------------------------------------------------
const authorController =require('../controllers/authorController')
const blogController = require ('../controllers/blogController')
const middleware=require("../middleware/tokenMiddleware")
//****************************************** */

router.post("/Authors" ,authorController.createAuthor )

router.post('/blogs',middleware.middle1 ,blogController.Blogs)

router.get('/getBlog', blogController.getBlogs)

router.put('/blogs/:blogId',middleware.middle1 ,middleware.middle2, blogController.updating)

router.delete('/blogs/:blogId',middleware.middle1 ,middleware.middle2, blogController.deleting)

router.delete('/blogs/:deletedBlogs', blogController.deletedBlogs)


router.post('/login',authorController.loginAuthor)







module.exports = router;