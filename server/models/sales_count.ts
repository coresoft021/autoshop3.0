import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_sales_count = sequelize.define('tas_sales_count', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      type: Sequelize.INTEGER(20),
      allowNull: false
    },
    
  
    
  
  }, {
    tableName: 'tas_sales_count',
     timestamps: true
  });


export {Tas_sales_count};
