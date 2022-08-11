var express = require("express");
var router = express.Router();
const { Book,User } = require("../database/models");


/* GET all books. */
// /api/books
router.get("/", async (req, res, next) => {
  // try to get books object from database
  try {
    // books will be the result of the book.findAll promise
    const books = await Book.findAll({include:User});

    // if books is valid, it will be sent as a json response
    console.log(books);
    res.status(200).json(books);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});
// Route to serve single book based on its id
// /api/books/:id
// /api/books/456 would respond with a book with id 456
router.get("/:id", async (req, res, next) => {
    // take the id from params
    const { id } = req.params;
    // query the database for a book with matching id
    try {
      // if successful:
      const book = await Book.findByPk(id,{include:User});
      // send back the book as a response
      res.status(200).json(book);
    } catch (err) {
      // if error:
      // handle error
      next(err);
    }

  });
// Route to handle adding a book
// /api/books/
router.post("/", async (req, res, next) => {
    console.log(req.body);
  // Take the form data from the request body
  const {uid, title, imageUrl,price,userId } = req.body;
  // Create a book object
  const bookObj = {
    uid: uid,
    title:title,
    imageUrl:imageUrl,
    price:price,
    userId:userId,

  };
  try {
    const newbook = await Book.create(bookObj);
    res.status(201).send(newbook);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedObj = { ...req.body };
  try {
    const book = await Book.findByPk(id);
    await book.set(updatedObj);
    const updatedBook = await book.save();
    res.status(201).send(updatedBook);
  } catch (err) {
    next(err);
  }
});

  
// Route to handle removing a book
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a book to delete
  try {
    // pass the id to the database to find book to be deleted
    // database would either respond succcess or fail
    const book = await Book.findByPk(id);
    // invoke the .destroy() method on the returned book
    await book.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {

    next(err);
  }
});
module.exports = router;
