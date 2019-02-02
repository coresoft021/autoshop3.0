import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;

publicRouter.get('/get_customer_list', (request: Request, response: Response) => {
 
   
  Tas_customers.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});




export { publicRouter };
