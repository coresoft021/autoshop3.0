import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_greeting = sequelize.define('tas_greeting', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    GREETTING: {
      type: Sequelize.STRING(140),
      allowNull: true
    },
   
  
  }, {
    tableName: 'tas_greeting',
     timestamps: false
  });


export {Tas_greeting};
