import {  sequelize , Sequelize } from '../routes/dbcon';

  const Den_orders = sequelize.define('den_orders', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ORDER_NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CLIENT_ID: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      PATIANT_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
    
    SIDE: {
      type: Sequelize.STRING,
      allowNull: true
    },
    NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      MATERIAL: {
      type: Sequelize.STRING,
      allowNull: true
    },
          STATUS: {
      type: Sequelize.STRING,
      allowNull: true
    },
     
  
  }, {
    tableName: 'den_orders',
     timestamps: true
  });


export {Den_orders};
