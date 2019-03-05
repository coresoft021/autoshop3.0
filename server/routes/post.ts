
import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_customers } from '../models/tas_customers';
import { Tas_products } from '../models/tas_products';
import { Tas_income_expence } from '../models/income_expence';
import { B2b_invoice_master } from '../models/b2b_master';
import { B2b_invo_slave } from '../models/b2b_slave';
import { Tas_greeting } from '../models/greeting';
  
import { Sequelize, sequelize } from './dbcon';
const postRouter: Router = Router();
const Op = Sequelize.Op;



publicRouter.post('/add_new_product', (request: Request, response: Response) => {
  Tas_products.findOne({ where: { PRODUCT_NAME:  request.body.product_name } }).then(person => {
    if(person){
               return response.json({success:true, msg:'product already existed'});
              }
  
  else 
        {
                                     Tas_products.create({
                                        PRODUCT_NAME: request.body.product_name,
                                        HSN_CODE: request.body.product_code,
                                        TAX: request.body.tax,
                                        PRICE: request.body.price
                                     
                                        }).then(function(pro)  {                    
                                                                     if (pro)   {
                                                                            return response.json({success:true, msg:'Successfully saved'});

                                                                     }                    
                                                                    else 
                                                                    {

                                                                      return Error
                                                                    }
                             
                                 })
                          
                    }
  
    })

})




postRouter.post('/update_default_greeting', (request: Request, response: Response) => {
  
  Tas_greeting .findOne({ where: { GREETTING:  request.body.option } }).then(person => {

if(person) {  
           
               person.update({DEFAULT : true} ).then(result => {
                    if(result){  return response.json({success:true, msg:'Greeting Set as Default'});   } 
                    else { return response.json({success:false, msg:'Not Updated'}); }          
               }) 
             
        }
 else {
         return response.json({success:false, msg:'No Item to be Updated'});
      } 
  })
  
})

postRouter.post('/add_new_greeting', (request: Request, response: Response) => {
  
  Tas_greeting .findOne({ where: { GREETTING:  request.body.greet } }).then(person => {

if(person) {  
           
              return response.json({success:false, msg:'Greeting Already existed'});
             
        }
 else {
            Tas_greeting.create({
                                  GREETTING : request.body.greet,
                                  DEFAULT : false
                               }).then(decx => {  return response.json({success:true, msg:'Greeting Added'}); })
   
   
             
      } 
  })
  
})



postRouter.post('/change_gold_rate', (request: Request, response: Response) => {
  
  Tas_products.findAll({ }).then(row => {

if(row) {  
             var len = row.length;
             for (var i = 0; i<len; i++) {
               row[i].update({PRICE : request.body.gold_rate} ).then(result => {
                    if(result){  return response.json({success:true, msg:'Rate Updated'});   } 
                    else { return response.json({success:false, msg:'no Updated'}); }          
               }) 
             }
        }
 else {
         return response.json({success:false, msg:'No Item to be Updated'});
      } 
  })
  
})






postRouter.post('/post_invoice_b2b', (request: Request, response: Response) => {


    B2b_invoice_master.findOne({ where: { INVOICE_NUMBER:  request.body.INVOICE_NUMBER , IS_B2B : true } }).then(person => {

  if(person){
  
                  return response.json({success:false, msg:'Invoice number already existed'});
            }
  else    {

              
                   B2b_invoice_master.create({
                                                INVOICE_NUMBER : request.body.INVOICE_NUMBER,
                                                CUSTOMER_NAME  : request.body.cus_name,
                                                CUSTOMER_CITY : request.body.cus_city,
                                                CUSTOMER_STREET : request.body.cus_street,
                                                CUSTOMER_GST_IN : request.body.cus_gst,
                                                CUSTOMER_PHONE : request.body.cus_phone,
                                                CUSTOMER_PHONE2 : request.body.cus_phone2,
                                                TRANS_MODE : request.body.tran_mode,
                                                VEH_NO : request.body.veh_no,
                                                BUNDLES : request.body.no_bundles,
                                                BILL_DATE : request.body.invoice_date,
                                                PLACE_SUPPLY : request.body.place_of_supply, 
                                                SUB_TOTAL  : request.body.sub_total,
                                                TAX_COLLECTED : request.body.total_tax,
                                                GRAND_TOTAL : request.body.grand_total,
                                                ITEM_LENGTH :request.body.length,
                                                TOTAL_PAYED : request.body.total_paid_today,
                                                TOTAL_DUE  :request.body.total_due,
                                                IS_PARTIAL_PAY : request.body.is_partial_pay,
                                                IS_B2B : true,
                                                IS_DELETED : false

                   
                                              })
               }                              

                                Tas_income_expence.create({             
                                        INVOICE_NUMBER_B2B : request.body.INVOICE_NUMBER,
                                        TOTAL_AMOUNT : request.body.grand_total,
                                        TAX_COLLECTED      : request.body.total_tax,
                                        TOTAL_PAYED   : request.body.total_paid_today,
                                        TOTAL_DUE    :request.body.total_due,
                                        IS_PARTIAL_PAY : request.body.is_partial_pay,
                                        TRAN_TYPE : request.body.tran_type,
                                       
                                      })
                                      

                 for (let indey22 = 0; indey22 < request.body.length; indey22++)  
                          {
                      Tas_products.findOne({ where: { PRODUCT_NAME:   request.body.items[indey22].PRODUCT_NAME } }).then(rec => {
                                      
                         if(rec)

                             {
                                var invo_qty = rec.AVAIL_QTY ;
                                var coming_qty = request.body.items[indey22].QUANTITY;
                                if ( coming_qty > 0 )
                                {
                                  invo_qty = invo_qty - coming_qty
                                  rec.update({AVAIL_QTY: invo_qty})
                                }
                                
                             }  })

                          }                 
                    
                   for (let indextt = 0; indextt < request.body.length;indextt ++)
                           {
    
                                    B2b_invo_slave.create({ 
                                                 B2B_MASTER_ID: request.body.INVOICE_NUMBER,
                                                 SI_NO : request.body.items[indextt].SI_NO,
                                                 PRODUCT_NAME : request.body.items[indextt].PRODUCT_NAME,
                                                 HSN_CODE : request.body.items[indextt].HSN_CODE,
                                                 QUANTITY: request.body.items[indextt].QUANTITY,
                                                 PRICE: request.body.items[indextt].PRICE,
                                                 TAX : request.body.items[indextt].TAX,
                                                 UNIT : request.body.items[indextt].UNIT,
                                                 NET_PRICE : request.body.items[indextt].PRICE_INCL_TAX,
                                                 NET_TOTAL : request.body.items[indextt].NET_TOTAL,
                                                 IS_B2B : true,
                                                 IS_DELETED : false
                                          }).then(ress=> {
                                                
                                          })
                            }
      
           Tas_customers.findOne({ where: { CUSTOMER_NAME:  request.body.customer_name ,
                                            ADDRESS : request.body.address, PHONE : request.body.phone
                               } }).then(person => {

                        if(person){              
                                  }

                        else {
                                   Tas_customers.create({                                                
                                                           CUSTOMER_NAME  : request.body.customer_name,
                                                           ADDRESS : request.body.address,
                                                           CITY : request.body.city,
                                                           PHONE : request.body.phone,
                                                           PHONE2 : request.body.phone2,
                                                           })                       


                           } 
           })

                      
                   
         }) 
          return response.json({success:true, msg:'Successfully saved'});
    })

export { postRouter };
