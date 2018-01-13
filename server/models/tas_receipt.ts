import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_receipts = sequelize.define('tas_receipts', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   
      CUSTOMER_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TAS_MASTER_ID: {
    type: Sequelize.INTEGER,
    allowNull: false
    },
     TAS_SLAVE_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
    },
   
      PRICE: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    
      GST_SLAB: {
      type: Sequelize.STRING,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_receipts',
     timestamps: true
  });


export {Tas_receipts};
