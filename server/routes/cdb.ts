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

const dbRouter: Router = Router();








dbRouter.get("/all", (request: Request, response: Response) => {
  
   Tas_invoice_master.sync({force: true}).then(() => {
   //Table created
  return Tas_sales_count.create({
    
     INVOICE_NUMBER : 1,
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })
  
  
   Tas_sales_count.sync({force: true}).then(() => {
   //Table created
  return Tas_sales_count.create({
    
     ITEM_NAME : '',
     ITEM_COUNT: 1,
     ON_STOCK: 5,
    
    
    })
   })
  
       Tas_expence_category.sync({force: true}).then(() => {
   //Table created
  return Tas_expence_category.create({
    
     CATEGORY_NAME : '',
     CATEGORY_TYPE: '',
     AMOUNT: 0,
     IS_PURCHASE: true,
   
    
    
    })
   })
  
     Tas_expence_category.sync({force: true}).then(() => {
   //Table created
  return Tas_expence_category.create({
    
     CATEGORY_NAME : '',
     CATEGORY_TYPE: '',
     AMOUNT: 0,
     IS_PURCHASE: true,
   
    
    
    })
   })
  
    Tas_income_expence.sync({force: true}).then(() => {
   //Table created
  return Tas_income_expence.create({
    
     INVOICE_NUMBER : 1,
     ESTIMATE_NUMBER: 1,
     IS_INVOICE: true,
     TOTAL_AMOUNT: 0,
   
    
    
    })
   })
  
             Tas_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_invo_slave.create({
    
            TAS_MASTER_ID: 1,
            PRODUCT_NAME : 'P',
            QUANTITY : 0,
            NET_PRICE : 4,
            DISCOUNT : 0,
            
            
    
    
     })
     
  })

     Tas_products.sync({force: true}).then(() => {
   //Table created
          return Tas_products.create({
    
            PRODUCT_NAME: '',
            PRODUCT_CODE : 'P',
            NET_PRICE : 0,
            TAX : 4,
            AVAIL_QTY : 0,
            NET_PURCHASE_PRICE: 0,
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
