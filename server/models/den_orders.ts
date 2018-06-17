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
      allowNull: false
    },
    CLIENT_ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      PATIANT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
    SIDE: {
      type: Sequelize.STRING,
      allowNull: false
    },
    NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      MATERIAL: {
      type: Sequelize.STRING,
      allowNull: false
    },
          STATUS: {
      type: Sequelize.STRING,
      allowNull: false
    },
     
  
  }, {
    tableName: 'den_orders',
     timestamps: true
  });


export {Den_orders};
