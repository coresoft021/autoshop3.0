import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_products } from '../models/tas_product';
import { Tas_invo_slave } from '../models/invo_slave';
import { Tas_invoice_master  } from '../models/invo_master';
import { Tas_sales_count } from '../models/sales_count';
import { Tas_customers } from '../models/customer_table';
import { Tas_expence_category  } from '../models/expence_category';
import { Tas_income_expence  } from '../models/income_expence';
import { Tas_estimate_master  } from '../models/esti_master';
import { Tas_estimate_slave  } from '../models/esti_slave';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;


 publicRouter.post('/partial_pay_report', (request: Request, response: Response) => {
 
   
      Tas_invoice_master.findAll({
         attributes: ['INVOICE_NUMBER', 'CUSTOMER_NAME','GROSS_TOTAL', 'TOTAL_PAYED','TOTAL_DUE'] ,
        where: { IS_PARTIAL_PAY:  true  }
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })



 publicRouter.post('/tax_report', (request: Request, response: Response) => {
 
   
      Tas_invoice_master.findAll({
         attributes: ['INVOICE_NUMBER', 'CUSTOMER_NAME','TAX_COLLECTED'] ,
        where: { createdAt: {[Op.between]:  [request.body.from_date ,  request.body.to_date ]}}
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })

  publicRouter.post('/sales_report', (request: Request, response: Response) => {
 
   
      Tas_invo_slave.findAll({
        where: { createdAt: {[Op.between]:  [request.body.from_date ,  request.body.to_date ]}}
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })


 publicRouter.post('/delete_invoice', (request: Request, response: Response) => {
   
    Tas_invoice_master.update({
      
         IS_DELETED : true
                  
                  } , {  where: { INVOICE_NUMBER:  request.body.invo_number } 
                  
                                  
                  
                         })


     Tas_income_expence.update({ 
                                        TRAN_TYPE : 0,
}, {
  
  
  where: { INVOICE_NUMBER:  request.body.invo_number } })

  return response.json({success:true, msg:'Invoice Deleted'});
                        }
                   )
  




publicRouter.post('/update_invoice', (request: Request, response: Response) => {

  Tas_income_expence.update({ 
                                        TOTAL_AMOUNT : request.body.sub_total,
                                        TAX_COLLECTED      : request.body.total_tax,
                                        TOTAL_PAYED   : request.body.total_payed,
                                        TOTAL_DUE    :request.body.total_due,
                                        IS_PARTIAL_PAY : request.body.is_partial_pay,
}, {
  
  
  where: { INVOICE_NUMBER:  request.body.invoice_number } })
           
 Tas_invoice_master.update({
         CUSTOMER_NAME  : request.body.cus_name,
         CUSTOMER_ADDRESS    : request.body.cus_address,
         CUSTOMER_PHONE  : request.body.cus_phone,
         CUSTOMER_VAT_ID    : request.body.cus_phone,
         SUB_TOTAL      : request.body.sub_total,
         TAX_COLLECTED      : request.body.total_tax,
         GROSS_TOTAL    : request.body.gross_total,
         ITEM_LENGTH    :request.body.length - 1,
         DISCOUNT_TOTAL  :request.body.discount_total,
         TOTAL_PAYED   :  request.body.total_payed,
         TOTAL_DUE    :request.body.total_due,
         IS_PARTIAL_PAY : request.body.is_partial_pay
                  
                  } , { 
                          where: { INVOICE_NUMBER:  request.body.invoice_number } })
  
      var len = request.body.length - 1 ;
    
   for (var index = 0; index < len ; index++) {
    
        Tas_invo_slave.update({ 
                             
                           //  PRODUCT_CODE : request.body.items[index].PRODUCT_CODE,
                             PRODUCT_NAME : request.body.items[index].PRODUCT_NAME,
                            TAX : request.body.items[index].TAX,
                            UNIT : request.body.items[index].UNIT,
                             QUANTITY: request.body.items[index].QUANTITY,
                            NET_PRICE: request.body.items[index].NET_PRICE,
                            DISCOUNT_PER : request.body.items[index].DISCOUNT_PER,
                            DISCOUNT_AMT : request.body.items[index].DISCOUNT_AMT,
                             TOTAL_NET : request.body.items[index].TOTAL_NET,
                            TOTAL_GROSS : request.body.items[index].TOTAL_GROSS
                        } , {
                               where: { TAS_MASTER_ID:  request.body.invoice_number , SI_NO : request.body.items[index].SI_NO } })
                             
                             
   }
       
    return response.json({success:true, msg:'Successfully saved'});
    
         
 });


  publicRouter.post('/reports_income', (request: Request, response: Response) => {
 
   
      Tas_income_expence.findAll({
        where: { createdAt: {[Op.between]:  [request.body.from_date ,  request.body.to_date ]}, TRAN_TYPE : 1}
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })


  publicRouter.post('/reports_expence', (request: Request, response: Response) => {
 
   
      Tas_income_expence.findAll({
        where: { createdAt: {[Op.between]:  [request.body.from_date ,  request.body.to_date ]}, TRAN_TYPE : 3}
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })






publicRouter.post('/post_invoice', (request: Request, response: Response) => {

    Tas_invoice_master.findOne({ where: { INVOICE_NUMBER:  request.body.invoice_number } }).then(person => {

  if(person){
  
                  return response.json({success:true, msg:'Category name already existed'});
            }
  else    {
    
      Tas_income_expence.create({             
                                        INVOICE_NUMBER : request.body.invoice_number,
                                        TOTAL_AMOUNT : request.body.sub_total,
                                        TAX_COLLECTED      : request.body.total_tax,
                                        TOTAL_PAYED   : request.body.total_payed,
                                        TOTAL_DUE    :request.body.total_due,
                                        IS_PARTIAL_PAY : request.body.is_partial_pay,
                                        REMARKS : request.body.remarks,
                                        TRAN_TYPE : 1,
                                       
                                        })
  
    Tas_invoice_master.create({
         INVOICE_NUMBER : request.body.invoice_number,
         CUSTOMER_NAME  : request.body.cus_name,
         CUSTOMER_ADDRESS    : request.body.cus_address,
         CUSTOMER_PHONE  : request.body.cus_phone,
         CUSTOMER_VAT_ID    : request.body.cus_phone,
         SUB_TOTAL      : request.body.sub_total,
         TAX_COLLECTED      : request.body.total_tax,
         GROSS_TOTAL    : request.body.gross_total,
         ITEM_LENGTH    :request.body.length,
         DISCOUNT_TOTAL  :request.body.discount_total,
         TOTAL_PAYED   : request.body.total_payed,
         TOTAL_DUE    :request.body.total_due,
         IS_PARTIAL_PAY : request.body.is_partial_pay
 })
    
   for (var index = 0; index < request.body.length; index++) {
    
        Tas_invo_slave.create({ 
                             SI_NO : request.body.items[index].SI_NO,
                             PRODUCT_CODE : request.body.items[index].PRODUCT_CODE,
                             PRODUCT_NAME : request.body.items[index].PRODUCT_NAME,
                             TAX : request.body.items[index].TAX,
                             UNIT : request.body.items[index].UNIT,
                             QUANTITY: request.body.items[index].QUANTITY,
                             TAS_MASTER_ID: request.body.invoice_number,
                             NET_PRICE: request.body.items[index].NET_PRICE,
                             DISCOUNT_PER : request.body.items[index].DISCOUNT_PER,
                             DISCOUNT_AMT : request.body.items[index].DISCOUNT_AMT,
                             TOTAL_NET : request.body.items[index].TOTAL_NET,
                             TOTAL_GROSS : request.body.items[index].TOTAL_GROSS
                        })
   }
    
  }
    })
       
    return response.json({success:true, msg:'Successfully saved'});
    
         
 });

publicRouter.post('/post_estimate', (request: Request, response: Response) => {

  
  
      Tas_income_expence.create({             
                                        INVOICE_NUMBER : request.body.invoice_number,
                                        TOTAL_AMOUNT : request.body.sub_total,
                                        TAX_COLLECTED      : request.body.total_tax,
                                        TOTAL_PAYED   : request.body.total_payed,
                                        TOTAL_DUE    :request.body.total_due,
                                        IS_PARTIAL_PAY : request.body.is_partial_pay,
                                        REMARKS : request.body.remarks,
                                        TRAN_TYPE : 2,
                                       
                                        })
  
    Tas_estimate_master.create({
         INVOICE_NUMBER : request.body.invoice_number,
         CUSTOMER_NAME  : request.body.cus_name,
         CUSTOMER_ADDRESS    : request.body.cus_address,
         CUSTOMER_PHONE  : request.body.cus_phone,
         CUSTOMER_VAT_ID    : request.body.cus_phone,
         SUB_TOTAL      : request.body.sub_total,
         TAX_COLLECTED      : request.body.total_tax,
         GROSS_TOTAL    : request.body.gross_total,
         ITEM_LENGTH    :request.body.length,
         DISCOUNT_TOTAL  :request.body.discount_total,
         TOTAL_PAYED   : request.body.total_payed,
         TOTAL_DUE    :request.body.total_due,
         IS_PARTIAL_PAY : request.body.is_partial_pay
 })
    
   for (var index = 0; index < request.body.length; index++) {
    
        Tas_estimate_slave.create({ 
                             SI_NO : request.body.items[index].SI_NO,
                             PRODUCT_CODE : request.body.items[index].PRODUCT_CODE,
                             PRODUCT_NAME : request.body.items[index].PRODUCT_NAME,
                             TAX : request.body.items[index].TAX,
                             UNIT : request.body.items[index].UNIT,
                             QUANTITY: request.body.items[index].QUANTITY,
                             TAS_MASTER_ID: request.body.invoice_number,
                             NET_PRICE: request.body.items[index].NET_PRICE,
                             DISCOUNT_PER : request.body.items[index].DISCOUNT_PER,
                             DISCOUNT_AMT : request.body.items[index].DISCOUNT_AMT,
                             TOTAL_NET : request.body.items[index].TOTAL_NET,
                             TOTAL_GROSS : request.body.items[index].TOTAL_GROSS
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





publicRouter.post('/add_expence_entry', (request: Request, response: Response) => {
  
  
Tas_income_expence.create({             
                                        EXPENCE_CATEGORY: request.body.is_purchase,
                                        EXP_FROM_DATE: request.body.from_date,
                                        EXP_TO_DATE: request.body.to_date,
                                        TOTAL_AMOUNT : request.body.amount,
                                        BENFICIARY : request.body.beneficiary,
                                        REMARKS : request.body.remarks,
                                        TRAN_TYPE : 3,
                                       
                                        })
     
                                      return response.json({success:true, msg:'Successfully saved'});
    
                                 
            }) 

      
  
 


publicRouter.get('/list_expence_category', (request: Request, response: Response) => {
 
   
  Tas_expence_category.findAll({
   attributes: ['CATEGORY_NAME']
 }).
then(users => {
  response.send(users);
  });

});




publicRouter.post('/add_category', (request: Request, response: Response) => {
  
  
Tas_expence_category.findOne({ where: { CATEGORY_NAME:  request.body.Category_name } }).then(person => {

  if(person){
  
                  return response.json({success:true, msg:'Category name already existed'});
            }
  
           
                           else{
                                    Tas_expence_category.create({
                                        CATEGORY_NAME: request.body.Category_name,
                                        CATEGORY_TYPE: request.body.cat_type,
                                        IS_PURCHASE: request.body.is_purchase,
                                        AMOUNT : 0,
                                       
                                        })
     
                                      return response.json({success:true, msg:'Successfully saved'});
    
                                 }
            }) 

      
  
  

})






publicRouter.get('/list_customers', (request: Request, response: Response) => {
 
   
  Tas_customers.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

publicRouter.post('/add_customer', (request: Request, response: Response) => {
  
  
Tas_customers.findOne({ where: { TIN:  request.body.tin } }).then(person => {

  if(person){
  
                  return response.json({success:true, msg:'tin already existed'});
            }
  
           
                           else{
                                    Tas_customers.create({
                                        CUSTOMER_NAME: request.body.customer_name,
                                        STREET: request.body.street,
                                        CITY: request.body.city,
                                        TIN: request.body.tin,
                                        PHONE_NUMBER : request.body.phone_no,
                                        E_MAIL :request.body.email,
                                       
                                        })
     
                                      return response.json({success:true, msg:'Successfully saved'});
    
                                 }
            }) 

      
  
  

})






 publicRouter.post('/get_a_invoice', (request: Request, response: Response) => {
 
   
   Tas_invoice_master.findOne({
                            where: {
                                      INVOICE_NUMBER: request.body.Invo_number
                                  }
                       }).then(function(master){
  
                                                if(master)
                                                  
                                                  {

                                                      Tas_invo_slave.findAll({
                                                      
                                                      where: {
                                                           TAS_MASTER_ID: request.body.Invo_number
                                                             }  }).then(function(slave)  {                    
                                                                                            response.json({
                                                                                            master: master, slave: slave
                                                                                            });

                                                                                           });  }
                                                                                           
                                                   else
                                                   {

                                                      response.status(403).send({success: false, msg: 'Bill not found'});
                                                   }                                        
                                                                                           
                                                                                           
                                                  }); 

});


 publicRouter.post('/get_a_estimate', (request: Request, response: Response) => {
 
   
   Tas_estimate_master.findOne({
                            where: {
                                      INVOICE_NUMBER: request.body.Invo_number
                                  }
                       }).then(function(master){
  
                                                if(master)
                                                  
                                                  {

                                                      Tas_estimate_slave.findAll({
                                                      
                                                      where: {
                                                           TAS_MASTER_ID: request.body.Invo_number
                                                             }  }).then(function(slave)  {                    
                                                                                            response.json({
                                                                                            master: master, slave: slave
                                                                                            });

                                                                                           });  }
                                                                                           
                                                   else
                                                   {

                                                      response.status(403).send({success: false, msg: 'Bill not found'});
                                                   }                                        
                                                                                           
                                                                                           
                                                  }); 

});



 publicRouter.get('/list_invoices', (request: Request, response: Response) => {
 
   
  Tas_invoice_master.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

 publicRouter.get('/list_estimate', (request: Request, response: Response) => {
 
   
  Tas_estimate_master.findAll({
  
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

   publicRouter.post('/get_estimate_number', (request: Request, response: Response) => {
    Tas_estimate_master.count().then(c => {
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
