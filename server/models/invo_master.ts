import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_invoice_master = sequelize.define('tas_invoice_master', {
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
    CUSTOMER_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      CUSTOMER_ADDRESS: {
      type: Sequelize.STRING,
      allowNull: true
    },
     CUSTOMER_PHONE: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
     CUSTOMER_VAT_ID: {
      type: Sequelize.STRING,
      allowNull: true
    },
     
      SUB_TOTAL: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    
    TAX_COLLECTED: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
     GROSS_TOTAL: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
      ITEM_LENGTH: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      DISCOUNT_TOTAL: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
    TOTAL_PAYED: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
    TOTAL_DUE: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
     IS_PARTIAL_PAY: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_invoice_master',
     timestamps: true
  });


export {Tas_invoice_master};
