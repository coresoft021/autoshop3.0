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


publicRouter.post('/add_new_product', (request: Request, response: Response) => {
  
  
Tas_products.findOne({ where: { PRODUCT_NAME:  request.body.product_name } }).then(person => {

  if(person){
  
                  return response.json({success:true, msg:'product already existed'});
            }
  
  else 
        {
            Tas_products.findOne({ where: { PRODUCT_CODE:  request.body.product_code } }).then(pers => {

                if(pers){
                          return response.json({success:true, msg:'Code already existed'});
                        }
                           else{
                                    Tas_products.create({
                                        PRODUCT_NAME: request.body.product_name,
                                        PRODUCT_CODE: request.body.product_code,
                                        NET_PRICE: request.body.net_price,
                                        TAX: request.body.tax,
                                        AVAIL_QTY : request.body.avail_qty,
                                        NET_PURCHASE_PRICE :request.body.net_purchase_price,
                                        UNIT : request.body.unit
                                        })
     
                                      return response.json({success:true, msg:'Successfully saved'});
    
                                 }
            }) 

        }
  
    })

})









 


publicRouter.post('/add_user', (request: Request, response: Response) => {
 Tas_users.create({
    NAME: request.body.username,
    CODE: 12,
    MARK: 10,
    PASSWORD: request.body.password
     })
     
  return response.json({success:true, msg:'Successfully saved'});
     
 });






                                
 


export { publicRouter };
