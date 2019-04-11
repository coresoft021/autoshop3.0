import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_feed_master = sequelize.define('tas_feed_master', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
     FIRST_NAME: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    LAST_NAME: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
     EMAIL: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
   RATING_GIVEN: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
 
  }, {
    tableName: 'tas_feed_master',
     timestamps: false
  });


export {Tas_feed_master};
