'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {},
  );
  Book.associate = function(models) {
    Book.belongsTo(models.User, {foreignKey: 'userId', as: 'book'});
  };
  return Book;
};
