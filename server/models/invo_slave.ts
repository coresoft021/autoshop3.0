import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_invo_slave = sequelize.define('tas_invo_slave', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },   
    TAS_MASTER_ID: {
    type: Sequelize.INTEGER,
    allowNull: false
    },
      PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    QUANTITY: {
       type: Sequelize.INTEGER,
    allowNull: false
    },
       
      NET_PRICE: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    
      DISCOUNT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_invo_slave',
     timestamps: true
  });


export {Tas_invo_slave};
