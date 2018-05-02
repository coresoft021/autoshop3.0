import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_products } from '../models/tas_product';

import { Tas_invoice_master  } from '../models/invo_master';


import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;
publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});






publicRouter.get('/get_pdt_list', (request: Request, response: Response) => {
 

  
  Tas_products.findAll({
  attributes: ['PRODUCT_NAME']
}).
then(users => {
  response.send(users);
 
});
  
});










 


publicRouter.post('/add_user', (request: Request, response: Response) => {
 Tas_users.create({
    NAME: request.body.username,
    CODE: 12,
    MARK: 10,
    PASSWORD: request.body.password
     })
     
  return response.json({success:true, msg:'Successfully saved'});
     
 });

publicRouter.post('/add_new_product', (request: Request, response: Response) => {
 Tas_products.create({
    PRODUCT_NAME: request.body.Productname,
    CODE: request.body.Code,
    PRICE: request.body.Price,
    GST_SLAB: request.body.Gst_slab
  
     })
     
  return response.json({success:true, msg:'Successfully saved'});
     
 });




                                
 


export { publicRouter };
