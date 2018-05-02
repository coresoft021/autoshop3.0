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
  return Tas_invo_master.create({
    
     INVOICE_NUMBER : 1,
     CUSTOMER_NAME: '',
     CUSTOMER_ADDRESS: '',
     CUSTOMER_PHONE: 0,
    SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
    GROSS_TOTAL: 0,
    
    
    })
   })
             Tas_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_tran_masavari.create({
    
            TAS_MASTER_ID: 1,
            PRODUCT_NAME : 'P',
            QUANTITY : 0,
            NET_PRICE : 4,
            DISCOUNT : 0,
            
            
    
    
     })
     
  })


       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'prem',
     PASSWORD: 'arshavin021',
     IS_ADMIN: 0,
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };
