import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_products = sequelize.define('tas_products', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CODE: {
      type: Sequelize.STRING,
      allowNull: false
    },
      PRICE: {
      type: Sequelize.INTEGER(6),
      allowNull: false
    },
    
    GST_SLAB: {
      type: Sequelize.STRING,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_products};
