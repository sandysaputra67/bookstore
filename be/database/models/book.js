const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  uid:{type:Sequelize.STRING},
  title: { type: Sequelize.STRING,allowNull: false },
  imageUrl: {
    type: Sequelize.STRING(500),
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  price:{type:Sequelize.DECIMAL(1000,2)}
});

module.exports = Book;