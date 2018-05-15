import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_sales_count = sequelize.define('tas_sales_count', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    INVOICE_NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ITEM_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      ITEM_COUNT: {
      type: Sequelize.STRING,
      allowNull: true
    },
    
      ON_STOCK: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    
  
     IS_PARTIAL_PAY: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_sales_count',
     timestamps: true
  });


export {Tas_sales_count};
