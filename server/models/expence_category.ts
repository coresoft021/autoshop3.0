import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_expence_category = sequelize.define('tas_expence_category', {
    ID: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CATEGORY_NAME: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    CATEGORY_TYPE: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
     AMOUNT: {
      type: Sequelize.INTEGER(25),
      allowNull: true
    },
    
    IS_PURCHASE: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    
   
  
  }, {
    tableName: 'tas_expence_category',
     timestamps: false
  });


export {Tas_expence_category};
