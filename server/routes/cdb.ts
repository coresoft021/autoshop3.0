import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';


import { Sequelize, sequelize } from './dbcon';

 

const dbRouter: Router = Router();

dbRouter.get("/all_1", (request: Request, response: Response) => {


     Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'a',
     PASSWORD: 's',
     IS_ADMIN: true,
    
      
    
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
