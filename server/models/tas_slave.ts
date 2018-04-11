import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_slave = sequelize.define('tas_slave', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
      PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    QUANTITY: {
       type: Sequelize.INTEGER,
    allowNull: false
    },
      
    TAS_MASTER_ID: {
    type: Sequelize.INTEGER,
    allowNull: false
    },
      PRICE: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    
      DISCOUNT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_slave',
     timestamps: true
  });


export {Tas_slave};
