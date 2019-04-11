
import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_feed_master  } from '../models/tas_feed_master';
import { Sequelize, sequelize } from './dbcon';
const postRouter: Router = Router();
const Op = Sequelize.Op;



postRouter.post('/add_subscription', (request: Request, response: Response) => {
  Tas_feed_master .findOne({ where: { EMAIL:  request.body.email } }).then(person => {
    if(person){
               return response.json({success:true, msg:'emain already on list'});
              }
  
  else 
        {
                                     Tas_feed_master.create({
                                        FIRST_NAME: request.body.first_name,
                                        LAST_NAME: request.body.last_name,
                                        EMAIL : request.body.email
                                     
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








export { postRouter };
