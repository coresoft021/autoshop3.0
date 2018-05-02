import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_products } from '../models/tas_product';

import { Tas_invoice_master  } from '../models/invo_history';


import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;
publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});

 publicRouter.get('/create_tas_slave_table', (request: Request, response: Response) => {
 Tas_slave.sync({force: true}).then(() => {
  //Table created
  return Tas_slave.create({
    
    PRODUCT_NAME : 'prem',
    QUANTITY: 0,
    TAS_MASTER_ID: 0,
    PRICE: 0,
    DISCOUNT: 0,
   });
 });
   
});
publicRouter.post('/add_new_invo_product', (request: Request, response: Response) => {
     console.log('inside');
        Tas_slave.create({ 
                             PRODUCT_NAME : 'go',
                             QUANTITY: 0,
                             TAS_MASTER_ID: 0,
                             PRICE: 0,
                            DISCOUNT: 0,

                        })

       
    return response.json({success:true, msg:'Successfully saved'});
    
         
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




  publicRouter.post('/login_check', (request: Request, response: Response) => {
   var username = request.body.username;
   var password = request.body.password;
    
    Tas_users.findOne({
  where: {
    NAME: request.body.username,
    PASSWORD: request.body.password
    }
}).then(function(result){
  
                                                if(result)
                                                {
                                                return response.json({success:true, msg:'Successfully logged'});

                                                }   
                                                else
                                                {

                                                response.status(403).send({success: false, msg: 'Authentication failed, User not found'});
                                                }    
                         });
      
   
 

   
 });

 
 


export { publicRouter };
