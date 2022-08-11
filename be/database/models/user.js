const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  userName: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      }
    }},
});

module.exports = User;