import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_products = sequelize.define('tas_products', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
     FEED_BACK_ID: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    CUSTOMER_NAME: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
     CUSTOMER_EMAIL: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
   RATING_GIVEN: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
 
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_products};
