import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_customers = sequelize.define('tas_customers', {
    ID: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
    HOUSE_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
     ADDRESS: {
      type: Sequelize.STRING,
      allowNull: true
    },
    
    GSTIN: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    PHONE: 
    {
      type: Sequelize.STRING(15),
      allowNull : true
    },
      PHONE2: 
    {
      type: Sequelize.STRING(15),
      allowNull : true
    },
    
    
 
  
  }, {
    tableName: 'tas_customers',
     timestamps: false
  });


export {Tas_customers};
