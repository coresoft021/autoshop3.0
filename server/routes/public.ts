import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Den_clients } from '../models/den_clients';

import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;



publicRouter.post('/add_new_client', (request: Request, response: Response) => {

    Den_clients.findOne({ where: { CUSTOMER_NAME:  request.body.customer_name } }).then(person => {

  if(person){
  
                  return response.json({success:true, msg:'Client name already existed'});
            }
  else    {
    
                Den_clients.create({             
                                        CUSTOMER_NAME : request.body.customer_name,
                                        STREET : request.body.street,
                                        CITY      : request.body.city,
                                        PHONE_NUMBER   : request.body.phone_number,
                                        E_MAIL    :request.body.email,
                                       
                                       
                                        })
  

      

   
    
  
           }
       
    return response.json({success:true, msg:'Successfully saved'});
    
         
 })
    });

 publicRouter.get('/list_invoices', (request: Request, response: Response) => {
 
   
  Tas_invoice_master.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

                          
 


export { publicRouter };
