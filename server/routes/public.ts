import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Den_clients } from '../models/den_clients';
import { Den_orders } from '../models/den_orders';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;



publicRouter.get('/get_clients', (request: Request, response: Response) => {
 
   
  Den_clients.findAll({
  
 }).
then(users => {
  response.send(users);
  });

});

  publicRouter.post('/get_order_number', (request: Request, response: Response) => {
    Den_orders.count().then(c => {
           response.json({
                                  text: "counted",
                                  count: c,
                      });
              
            })
   
   })


publicRouter.post('/post_new_order', (request: Request, response: Response) => {

    Den_orders.create({             
                                        ORDER_NUMBER : request.body.order_number,
                                        CLIENT_ID : request.body.client_id,
                                        PATIENT_NAME      : request.body.patiant_name,
                                        SIDE    :request.body.side,
                                        NUMBER    :request.body.number,
                                        MATERIAL    :request.body.material,
                                        STATUS    :request.body.status,
                                        })
  
          
       
    return response.json({success:true, msg:'Successfully saved'});
    
         
 })


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

                          
 


export { publicRouter };
