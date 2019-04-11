import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_feed_master = sequelize.define('tas_feed_master', {
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
      FIRST_NAME: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
    LAST_NAME: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
     EMAIL: {
      type: Sequelize.STRING(98),
      allowNull: true
    },
   RATING_GIVEN: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
 
  }, {
    tableName: 'tas_feed_master',
     timestamps: false
  });


export {Tas_feed_master};
