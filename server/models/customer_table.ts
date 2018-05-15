import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_customers = sequelize.define('tas_customers', {
    ID: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_NAME: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    STREET: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
    TIN: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
  
  }, {
    tableName: 'tas_customers',
     timestamps: false
  });


export {Tas_customers};
