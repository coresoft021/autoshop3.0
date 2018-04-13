import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_products } from '../models/tas_product';
import { Tas_receipts } from '../models/tas_receipt';
import { Tas_invoice_history  } from '../models/invo_history';
import { Tas_product_det } from '../models/tas_product_det';
import { Tas_slave } from '../models/tas_slave';
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

publicRouter.get('/get_product_list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_products.findAll({
  attributes: ['ID','PRODUCT_NAME','CODE','PRICE','GST_SLAB']
}).
then(users => {
  response.send(users);
 
});
});

publicRouter.get('/get_pdt_list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_products.findAll({
  attributes: ['PRODUCT_NAME']
}).
then(users => {
  response.send(users);
 
});
  
});

publicRouter.get('/list_receipts', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_receipts.findAll({
  attributes: ['ID','CUSTOMER_NAME','PRODUCT_NAME','QUANTITY','TAS_MASTER_ID','TAS_SLAVE_ID','PRICE','GST_SLAB']
}).
then(users => {
  response.send(users);
 
});
});








 publicRouter.get('/create_user_table', (request: Request, response: Response) => {
 Tas_users.sync({force: true}).then(() => {
  //Table created
  return Tas_users.create({
    NAME: 'Prems021',
    CODE: 11,
    MARK: 100,
    PASSWORD: 'arshavin021'
     });
 });
   
});

 publicRouter.get('/create_pdt_table', (request: Request, response: Response) => {
 Tas_products.sync({force: true}).then(() => {
  //Table created
  return Tas_products.create({
    PRODUCT_NAME: 'Prems021',
    CODE: 'B11',
    PRICE: 100,
    GST_SLAB: '0'
     });
 });
   
});


 

//  publicRouter.get('/create_receipts_table', (request: Request, response: Response) => {
//  Tas_receipts.sync({force: true}).then(() => {
//   //Table created
//   return Tas_receipts.create({
//     CUSTOMER_NAME: 'Mike',
//     PRODUCT_NAME: 'paraceptamol',
//     QUANTITY: 1,
//     TAS_MASTER_ID:1,
//     TAS_SLAVE_ID:1,
//     PRICE:100,
//     GST_SLAB: '0'
//      });
//  });
   
// });




publicRouter.post('/list_expired_products_between', (request: Request, response: Response) => {
  Tas_product_det.findAll({
  attributes: ['ID','PRODUCT_NAME','DATEOFPUR','DATEOFEXP','BATCH','HSN'],
    
     where: { DATEOFEXP: {[Op.between]:  [request.body.to_date ,  request.body.from_date ]}}  
                
}).
then(users => {
  response.send(users);
 
});
});





publicRouter.post('/list_expired_products', (request: Request, response: Response) => {
  Tas_product_det.findAll({
  attributes: ['ID','PRODUCT_NAME','DATEOFEXP'],
     where: {  DATEOFEXP: {  [Op.lt]: request.body.exp_date } , }
}).
then(users => {
  response.send(users);
 
});
});



  publicRouter.get('/create_invoice_table', (request: Request, response: Response) => {
 Tas_invoice_history.sync({force: true}).then(() => {
  //Table created
  return Tas_invoice_history.create({
    INVOICE_NUMBER: 0,
    CUSTOMER_NAME:'prem',
    SUB_TOTAL:0,
     TAX_COLLECTED:0,
     GROSS_TOTAL:0
       
     });
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

 publicRouter.get('/create_pdt_table_det', (request: Request, response: Response) => {
 Tas_product_det.sync({force: true}).then(() => {
  return Tas_product_det.create({
    PRODUCT_NAME: 'Prems021',
    CODE: 'B11',
    BATCH: 100,
    HSN: 2,
    DATEOFPUR: new Date(1980, 6, 20),
    DATEOFEXP: new Date(1980, 6, 20)
     });
 });
   
});

publicRouter.post('/add_product_det', (request: Request, response: Response) => {
 Tas_product_det.create({
    PRODUCT_NAME: request.body.Productname,
    CODE: 'b11',
    BATCH: request.body.Batch_number,
    HSN: request.body.HSN,
    DATEOFPUR: request.body.purchase_date,
    DATEOFEXP: request.body.exp_date,
  
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
