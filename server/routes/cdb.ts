import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_invoice_master } from '../models/invo_master';
import { Tas_invo_slave } from '../models/invo_slave';
import { Tas_products } from '../models/tas_product';
import { Tas_sales_count } from '../models/sales_count';
import { Tas_customers } from '../models/customer_table';
import { Tas_expence_category  } from '../models/expence_category';
import { Tas_income_expence  } from '../models/income_expence';
import { Sequelize, sequelize } from './dbcon';
import { Tas_estimate_master } from '../models/esti_master';
import { Tas_estimate_slave } from '../models/esti_slave';
 

const dbRouter: Router = Router();








dbRouter.get("/all", (request: Request, response: Response) => {
  
   Tas_invoice_master.sync({force: true}).then(() => {
   //Table created
  return Tas_invoice_master.create({
    
    
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })
  
    Tas_estimate_master.sync({force: true}).then(() => {
   //Table created
  return Tas_estimate_master.create({
    
   
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })
  
  
             Tas_estimate_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_estimate_slave.create({
    
            TAS_MASTER_ID: 1,
           
            QUANTITY : 0,
            NET_PRICE : 4,
            DISCOUNT : 0,
            
            
    
    
     })
     
  })
  
   Tas_sales_count.sync({force: true}).then(() => {
   //Table created
  return Tas_sales_count.create({
    
     ON_STOCK: 5,
    
    
    })
   })
  
       Tas_expence_category.sync({force: true}).then(() => {
   //Table created
  return Tas_expence_category.create({
    
   
     IS_PURCHASE: true,
   
    
    
    })
   })
  
     Tas_customers.sync({force: true}).then(() => {
   //Table created
  return Tas_customers.create({
    
   CITY : '',
     
   
    
    
    })
   })
  
    Tas_income_expence.sync({force: true}).then(() => {
   //Table created
  return Tas_income_expence.create({
    
    
     TOTAL_AMOUNT: 0,
   
    
    
    })
   })
  
             Tas_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_invo_slave.create({
    
          
            DISCOUNT : 0,
            
            
    
    
     })
     
  })

     Tas_products.sync({force: true}).then(() => {
   //Table created
          return Tas_products.create({
    
          
            UNIT: 'pc'
            
            
    
    
     })
     
  })

       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'a',
     PASSWORD: 's',
     IS_ADMIN: true,
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };
