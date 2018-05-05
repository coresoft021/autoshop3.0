import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_products } from '../models/tas_product';

import { Tas_invoice_master  } from '../models/invo_master';


import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "fucked",
    title: "Greetings.",
  });
});


publicRouter.post('/post_invoice', (request: Request, response: Response) => {

    Tas_master.create({
         INVOICE_NUMBER : request.body.invoice_number,
         CUSTOMER_NAME  : request.body.cus_name,
         CUSTOMER_ADDRESS    : request.body.cus_address,
         CUSTOMER_PHONE  : request.body.cus_phone,
         CUSTOMER_VAT_ID    : request.body.cus_phone,
         SUB_TOTAL      : request.body.sub_total,
         TAX_COLLECTED      : request.body.total_tax,
         GROSS_TOTAL    : request.body.gross_total,
         ITEM_LENGTH    :request.body.invo.length,
         DISCOUNT_TOTAL  :request.body.discount_total,
         TOTAL_PAYED   : request.body.total_payed,
         TOTAL_DUE    :request.body.total_due,
         IS_PARTIAL_PAY : false,
 
    
   for (var index = 0; index <= request.body.length; index++) {
    
   
        Tas_slave.create({ 
                             PRODUCT_NAME : request.body.invo_det[index].PRODUCT_NAME,
                             QUANTITY: request.body.invo_det[index].QUANTITY,
                             TAS_MASTER_ID: request.body.invo.SI_NO,
                             PRICE: request.body.invo_det[index].PRICE,
                             DISCOUNT: 0,
                             TOTAL_ITEM_COST : request.body.invo_det[index].TOTAL_ITEM_COST,
                             TAX_PER_ENTRY : request.body.invo_det[index].TOTAL_INC_TAX,
                             IS_RETURN      : 0

                        })
   }
       
    return response.json({success:true, msg:'Successfully saved'});
    
         
 });
 publicRouter.get('/list_pdts', (request: Request, response: Response) => {
 
   
  Tas_products.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

   publicRouter.post('/get_invoice_number', (request: Request, response: Response) => {
    Tas_invoice_master.count().then(c => {
           response.json({
    text: "counted",
    count: c,
  });
              
            })
   
   })




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









 





                                
 


export { publicRouter };
