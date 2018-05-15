import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_expence_category = sequelize.define('tas_expence_category', {
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
     CITY: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
    TIN: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
     PHONE_NUMBER: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
       E_MAIL: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
  
  }, {
    tableName: 'tas_expence_category',
     timestamps: false
  });


export {Tas_expence_category};
