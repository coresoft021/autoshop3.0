import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_products = sequelize.define('tas_products', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
    HSN_CODE: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
     
    TAX: {
      type: Sequelize.FLOAT,
      allowNull: true
    },

      PRICE: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
 
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_products};
