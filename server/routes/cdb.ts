import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Tas_products } from '../models/tas_products';


import { Sequelize, sequelize } from './dbcon';

 

const dbRouter: Router = Router();

dbRouter.get("/all_1", (request: Request, response: Response) => {


     Tas_products.sync({force: true}).then(() => {
   //Table created
  return Tas_products.create({
    
     PRODUCT_NAME : 'gold',
     
      
    
     })
     })


 return response.json({success:true, msg: 'found'});
  })


dbRouter.get("/about", (request: Request, response: Response) => {
  
return response.json({success:true, msg: 'found'});
   })




dbRouter.get("/all", (request: Request, response: Response) => {
  
  
       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'a',
     PASSWORD: 's',
     IS_ADMIN: true,
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };
