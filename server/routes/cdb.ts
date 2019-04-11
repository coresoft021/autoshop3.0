import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Sequelize, sequelize } from './dbcon';
const dbRouter: Router = Router();

dbRouter.get("/all", (request: Request, response: Response) => {


     Tas_products.sync({force: true}).then(() => {
   //Table created
  return Tas_products.create({    
     FEED_BACK_ID : 1,   
     })
     })



 return response.json({success:true, msg: 'found'});
  })





export { dbRouter };
