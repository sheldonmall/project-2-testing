 // Table definition: product
module.exports = function (sequelize, DataTypes) {   
  var Orders = sequelize.define("order", {    
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      },
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },    
  });

  // Export table object
  return Orders;
};
