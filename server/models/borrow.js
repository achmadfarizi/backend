'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrow.belongsTo(models.Book, {
        foreignKey: {
          name: "book"
        }
      }),

      Borrow.belongsTo(models.Member, {
        foreignKey: {
          name: "member"
        }
      })
    }
  }
  Borrow.init({
    member: DataTypes.INTEGER,
    book: DataTypes.INTEGER,
    borrowAt: DataTypes.DATE,
    returnAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Borrow',
  });
  return Borrow;
};