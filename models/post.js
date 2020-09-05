module.exports = function (sequelize, DataTypes) {
  // Table definition: user
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
        len: [5,6],
      },
    },    
  });

  // Table definition: product
  var Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal",
    },
  });
  return Post;
};
