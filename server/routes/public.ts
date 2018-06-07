import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';

import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;





 publicRouter.get('/list_invoices', (request: Request, response: Response) => {
 
   
  Tas_invoice_master.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

                          
 


export { publicRouter };
