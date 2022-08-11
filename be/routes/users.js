var express = require("express");
var router = express.Router();
const { User,Book } = require("../database/models");


/* GET all users. */
// /api/users
router.get("/", async (req, res, next) => {
  // try to get users object from database
  try {
    // users will be the result of the user.findAll promise
    const users = await User.findAll({ include: Book });

    // if users is valid, it will be sent as a json response
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});
// Route to serve single user based on its id
// /api/users/:id
// /api/users/456 would respond with a user with id 456
router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a user with matching id
  try {
    // if successful:
    const user = await User.findByPk(id,{ include: Book });
    // send back the user as a response
    res.status(200).json(user);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});


// Route to handle adding a user
// /api/users/
router.post("/", async (req, res, next) => {
    console.log(req.body);
  // Take the form data from the request body
  const { userName,password,email} = req.body;
  // Create a user object
  const userObj = {
    userName: userName,
    password: password,
    email:email,

  };
  try {
    const newuser = await User.create(userObj);
    res.status(201).send(newuser);
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedObj = { ...req.body };
  try {
    const user = await User.findByPk(id);
    await user.set(updatedObj);
    const updatedUser = await user.save();
    res.status(201).send(updatedUser);
  } catch (err) {
    next(err);
  }
});

// Route to handle removing a user
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a user to delete
  try {
    // pass the id to the database to find user to be deleted
    // database would either respond succcess or fail
    const user = await User.findByPk(id);
    // invoke the .destroy() method on the returned user
    await user.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {

    next(err);
  }
});

module.exports = router;
