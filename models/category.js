 // Table definition: product
module.exports = function (sequelize, DataTypes) {   
  var Category = sequelize.define("category", {    
    category_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [1],
      },
    },    
    category_desc: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1],
      },
    },    
  });

  // Export table object
  return Category;
};
