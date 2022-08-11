const { User, Book } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({userName: "Lamarr", password: "12355",email:"Lamarr@gmail.com"}),
    User.create({userName: "Jiang", password: "Xin2234",email:"Jiang@gmail.com"}),
    User.create({userName: "Derrick", password: "Xwe2234",email:"Derrick@gmail.com"}),
    User.create({userName: "Kevin", password: "Xr22w34",email:"Kevin@gmail.com"}),
    Book.create({
      uid:"qAcAAAAAMBAJ",
      title:"Vegetarian Times",
      imageUrl: "http://books.google.com/books/content?id=qAcAAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      price:12.3
    }),
    // id:{type:Sequelize.STRING},
    // name: { type: Sequelize.STRING,allowNull: false },
    // printType:{ type: Sequelize.STRING},
    // imageUrl: {
    //   type: Sequelize.STRING,
    //   defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
    // },
    // authors:{type: Sequelize.STRING},
    // saleInfo:{type:Sequelize.STRING}
  ]);
};

module.exports = seedDatabase;
