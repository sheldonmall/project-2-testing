// Table definition: user
module.exports = function (sequelize, DataTypes) {  
  var User = sequelize.define("user", {
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    street_address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    city: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    province: {
      type: DataTypes.TEXT(2),
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    postal_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      validate: {
        len: [5, 6],
      },
    },
  });
 
  // Export table object
  return User;
};
