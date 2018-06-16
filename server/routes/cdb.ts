import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';

import { Den_clients } from '../models/den_clients';
import { Den_orders } from '../models/den_orders';
import { Sequelize, sequelize } from './dbcon';

 

const dbRouter: Router = Router();








dbRouter.get("/all", (request: Request, response: Response) => {
  
   Den_clients.sync({force: true}).then(() => {
   //Table created
  return Den_clients.create({
    
    
     STREET: '',
   
    
    
    })
   })
  
    Den_orders.sync({force: true}).then(() => {
   //Table created
  return Den_clients.create({
    
    
     NUMBER: 1,
   
    
    
    })
   })
  
   
  
  
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
