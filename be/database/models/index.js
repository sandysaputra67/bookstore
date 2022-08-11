// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User=require("./user");
const Book=require("./book");

User.hasMany(Book);

Book.belongsTo(User);
module.exports = {
  User,
  Book,
};
