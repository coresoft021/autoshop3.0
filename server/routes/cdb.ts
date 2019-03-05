import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Tas_products } from '../models/tas_products';
import { B2b_invoice_master } from '../models/b2b_master';
import { B2b_invo_slave } from '../models/b2b_slave';
import { Tas_income_expence  } from '../models/income_expence';
import { Tas_greeting  } from '../models/greeting';



import { Sequelize, sequelize } from './dbcon';

 

const dbRouter: Router = Router();

dbRouter.get("/all", (request: Request, response: Response) => {


     Tas_products.sync({force: true}).then(() => {
   //Table created
  return Tas_products.create({    
     PRODUCT_NAME : 'gold',   
     })
     })
       B2b_invoice_master.sync({force: true}).then(() => {
   //Table created
  return B2b_invoice_master.create({    
     INVOICE_NUMBER : 1,   
     })
     })
       B2b_invo_slave.sync({force: true}).then(() => {
   //Table created
  return B2b_invo_slave.create({    
     B2B_MASTER_ID : 1,   
     })
     })
      Tas_income_expence.sync({force: true}).then(() => {
   //Table created
  return Tas_income_expence.create({    
     INVOICE_NUMBER_B2B : 1,   
     })
     })
  
   Tas_greeting.sync({force: true}).then(() => {
   //Table created
  return Tas_greeting.create({
    
     GREETTING : 'a',
       
     })
   })


 return response.json({success:true, msg: 'found'});
  })


dbRouter.get("/about", (request: Request, response: Response) => {
  
return response.json({success:true, msg: 'found'});
   })


dbRouter.get("/user_table", (request: Request, response: Response) => {
  
  
       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'a',
     PASSWORD : 's',
     IS_ADMIN : true
       
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })

dbRouter.get("/one", (request: Request, response: Response) => {
  
  
       Tas_greeting.sync({force: true}).then(() => {
   //Table created
  return Tas_greeting.create({
    
     GREETTING : 'a',
       
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };
