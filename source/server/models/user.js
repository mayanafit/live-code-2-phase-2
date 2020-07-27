'use strict';
const {
  Model
} = require('sequelize');
const {hashPass} = require(`../helpers/bcrypt`)
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Animal, { through: models.Favorite });
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Name is required!`
        },
        notNull: {
          msg: `Name must be provided!`
        }
      }
    }
    ,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: `Email is required!`
        },
        notNull: {
          msg: `Email must be provided!`
        },
        isEmail: {
          msg: `Email must be in format 'yourname@example.com'!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password is required!`
        },
        notNull: {
          msg: `Password must be provided!`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};