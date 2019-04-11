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


dbRouter.get("/about", (request: Request, response: Response) => {
  
return response.json({success:true, msg: 'found'});
   })


dbRouter.get("/user_table", (request: Request, response: Response) => {
  
  


dbRouter.get("/slave", (request: Request, response: Response) => {
  
  
       B2b_invo_slave.sync({force: true}).then(() => {
   //Table created
  return B2b_invo_slave.create({
    
     B2B_MASTER_ID : 1,


export { dbRouter };
