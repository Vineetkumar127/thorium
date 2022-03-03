const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher_id

    if(!authorId) return res.send(' author_Id  Not Present.')
   

    let author = await authorModel.findById(authorId)
 
    if(!author) return res.send('Not valid  authorId')


    if(!publisherId) return res.send('Not valid as the publisher.') 
    

    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('Not valid as no publisher.')


    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

    const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author_id publisher_id')
        res.send({data: books})
}

const updateBooks = async function (req,res){

    let id = await publisherModel.find({name:{$in:["Penguin", "HarperCollins" ]}}).select({_id:1})
            
    arr = []
    arr = id.map(x=>x.id)

    let updateBook = await bookModel.updateMany( {publisher:{$in:arr} }, {$set:{isHardCover:true} }, {new:true} )
    
    res.send(updateBook)  

}

const updatePrice = async function (req, res){
    let author = await authorModel.find({rating:{$gt:3.5}}).select({_id : 1})
    // console.log(author)
    arr1 = []
    arr1 = author.map(x=>x.author)
    let updateAuthor = await bookModel.updateMany( {LibraryBook:{$in:arr1}}, {$inc:{price:+10}}, {new:true} )

    res.send (updateAuthor)

}



module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.updateBooks= updateBooks
module.exports.updatePrice= updatePrice


