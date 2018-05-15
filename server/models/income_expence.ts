import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_income_expence = sequelize.define('tas_income_expence', {
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
      ESTIMATE_NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      IS_INVOICE: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    
     TRAN_TYPE: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
     
      SUB_EXPENCE_CATEGORY: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
    TAX_COLLECTED: {
      type: Sequelize.INTEGER(20),
      allowNull: true
    },
     TOTAL_AMOUNT: {
      type: Sequelize.INTEGER(25),
      allowNull: false
    },
     
    TOTAL_PAYED: {
      type: Sequelize.INTEGER(25),
      allowNull: true
    },
    TOTAL_DUE: {
      type: Sequelize.INTEGER(25),
      allowNull: true
    },
     IS_PARTIAL_PAY: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_income_expence',
     timestamps: true
  });


export {Tas_income_expence};
