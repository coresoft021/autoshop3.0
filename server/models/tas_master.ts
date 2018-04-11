import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_master = sequelize.define('tas_master', {
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
      DOCTOR_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
       DOCTOR_PHONE: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      DISCOUNT_TOTAL: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
    
    TAX_COLLECTED: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
     GROSS_TOTAL: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
  
  }, {
    tableName: 'tas_master',
     timestamps: true
  });


export {Tas_master};
