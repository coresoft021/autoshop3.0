import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_product_det = sequelize.define('tas_product_det', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
    CODE: {
      type: Sequelize.STRING,
      allowNull: true
    },
      BATCH: {
      type: Sequelize.STRING,
      allowNull: true
    },
      HSN: {
      type: Sequelize.STRING,
      allowNull: true
    },
      DATEOFPUR: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
      DATEOFEXP: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    
   
  
  }, {
    tableName: 'tas_product_det',
     timestamps: true
  });


export {Tas_product_det};
