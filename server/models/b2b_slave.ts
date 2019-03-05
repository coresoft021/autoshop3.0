import {  sequelize , Sequelize } from '../routes/dbcon';

  const B2b_invo_slave = sequelize.define('invoice_slave', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },   
    B2B_MASTER_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
    }, 
       SI_NO: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },

    QUANTITY: {
       type: Sequelize.INTEGER,
    allowNull: true
    },
     GROSS_WEIGHT: {
       type: Sequelize.INTEGER,
    allowNull: true
    },
     STONE_WEIGHT: {
       type: Sequelize.INTEGER,
    allowNull: true
    },
     NET_WEIGHT: {
       type: Sequelize.INTEGER,
    allowNull: true
    },
       
      RATE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
      VAOP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
     STONE_VALUE: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    
     NET_TOTAL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    IS_B2B: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },

      IS_DELETED: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'invoice_slave',
     timestamps: true
  });


export {B2b_invo_slave };
