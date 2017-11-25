import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_users = sequelize.define('tas_users', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PASSWORD: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
    CODE: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
  
  }, {
    tableName: 'tas_users',
     timestamps: false
  });


export {Tas_users};
