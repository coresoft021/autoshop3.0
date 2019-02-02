import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Tas_products } from '../models/tas_products';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;


      publicRouter.get('/get_invoice_number_b2b', (request: Request, response: Response) => {
         B2b_invoice_master.max('INVOICE_NUMBER', {where : {'IS_B2B': true } }).then(result => {
         if(result)
          { response.json({text: "counted",count: result });  }
        else {  response.json({text: "counted",count: 0});  }
       })
     })

 publicRouter.get('/get_product_list', (request: Request, response: Response) => {
 
   
  Tas_products.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

publicRouter.get('/get_customer_list', (request: Request, response: Response) => {
 
   
  Tas_customers.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});




export { publicRouter };
