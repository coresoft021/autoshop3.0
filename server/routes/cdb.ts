import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_feed_master  } from '../models/tas_feed_master';
import { Sequelize, sequelize } from './dbcon';
const dbRouter: Router = Router();

dbRouter.get("/feed_master", (request: Request, response: Response) => {
     Tas_feed_master.sync({force: true}).then(() => {
   //Table created
  return Tas_feed_master.create({    
     FEED_BACK_ID : 1,   
     })
     })
 return response.json({success:true, msg: 'found'});
  })
dbRouter.get("/user", (request: Request, response: Response) => {
     Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({    
     USER_NAME : 1,   
     })
     })
 return response.json({success:true, msg: 'found'});
  })





export { dbRouter };
