import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_invo_master } from '../models/invo_master';
import { Tas_invo_slave } from '../models/invo_slave';

import { Sequelize, sequelize } from './dbcon';

const dbRouter: Router = Router();


dbRouter.get("/invo_master", (request: Request, response: Response) => {
  
  Tas_master.sync({force: true}).then(() => {
   //Table created
  return Tas_slave.create({
    
     PRODUCT_NAME : 'prem',
     QUANTITY: 0,
     TAS_MASTER_ID: 0,
     PRICE: 0,
    TAX_PER_ENTRY: 0,
     DISCOUNT: 0,
     TOTAL_ITEM_COST : 0,
    IS_RETURN: 0,
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  })
  

});



  
 dbRouter.get('/invo_slave', (request: Request, response: Response) => {
  Tas_slave.sync({force: true}).then(() => {
   //Table created
  return Tas_slave.create({
    
     PRODUCT_NAME : 'prem',
     QUANTITY: 0,
     TAS_MASTER_ID: 0,
     PRICE: 0,
    TAX_PER_ENTRY: 0,
     DISCOUNT: 0,
     TOTAL_ITEM_COST : 0,
    IS_RETURN: 0,
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  })

});


 
dbRouter.get("/users", (request: Request, response: Response) => {
   Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'prem',
     PASSWORD: 'arshavin021',
     TAS_MASTER_ID: 0,
     IS_ADMIN: 0,
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  })


});





dbRouter.get("/all", (request: Request, response: Response) => {
  
   Tas_invo_master.sync({force: true}).then(() => {
   //Table created
  return Tas_members.create({
    
     MEMBER_NAME : 'prem',
     ADDRESS: '',
     MEMBERSHIP_NO: 1,
     PHONE: 0,
    CREDIT_BAL: 0,
     REMARKS: '',
    
    
    })
   })
             Tas_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_tran_masavari.create({
    
     MEMBERSHIP_NO: 1,
     AMOUNT: 0,
     DATE_FROM: new Date(1980, 6, 20),
     DATE_UPTO: new Date(1980, 6, 20),
     DATE_OF_PAYMENT: new Date(1980, 6, 20),
    
     })
     
  })


       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'prem',
     PASSWORD: 'arshavin021',
     TAS_MASTER_ID: 0,
     IS_ADMIN: 0,
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };
