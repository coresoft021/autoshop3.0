import {  sequelize , Sequelize } from '../routes/dbcon';

  const Den_clients = sequelize.define('den_clients', {
    ID: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_NAME: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    STREET: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
     CITY: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
      
     PHONE_NUMBER: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    
       E_MAIL: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
  
  }, {
    tableName: 'den_clients',
     timestamps: false
  });


export {Den_clients};
