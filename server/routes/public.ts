import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_feed_master  } from '../models/tas_feed_master';

import { Sequelize, sequelize } from './dbcon';

const publicRouter: Router = Router();
const Op = Sequelize.Op;
var numberToText = require('number2text');




   
 



publicRouter.get('/get_subscription_list', (request: Request, response: Response) => {
 
   
  Tas_feed_master.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});




export { publicRouter };
