import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_products = sequelize.define('tas_products', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: Sequelize.STRING(25),
      allowNull: false
    },
    PRODUCT_CODE: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
      NET_PRICE: {
      type: Sequelize.INTEGER(15),
      allowNull: false
    },
    
    TAX: {
      type: Sequelize.INTEGER(5),
      allowNull: false
    },
    AVAIL_QTY: {
      type: Sequelize.INTEGER(15),
      allowNull: false
    },
      NET_PURCHASE_PRICE: {
      type: Sequelize.INTEGER(15),
      allowNull: false
    },
       UNIT: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
  
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_products};
