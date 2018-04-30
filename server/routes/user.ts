import { Request, Response, Router } from "express";
import { Sequelize, sequelize } from './dbcon';
import { Tas_users } from '../models/aut-users';
const userRouter: Router = Router();

userRouter.get("/", (request: Request, response: Response) => {

  response.json(user);
});
 userRouter.post('/login_check', (request: Request, response: Response) => {
   var username = request.body.username;
   var password = request.body.password;
    
    Tas_users.findOne({
  where: {
    USER_NAME: request.body.username,
    PASSWORD: request.body.password
    }
}).then(function(result){
  
                                                if(result)
                                                { 
                                                    if(result.IS_ADMIN === true)
                                                    {
                                                        return response.json({success:true, msg:'Admin logged'});
                                                       }
                                                          else
                                                {
                                                     return response.json({success:true, msg:'user logged'});   }

                                                }   
                                                else
                                                {

                                                return response.json({success: false, msg: 'Authentication failed'});
                                                }    
                         });
      
   
 

   
 });


  userRouter.post('/server_check', (request: Request, response: Response) => {
   var username = 'a'
   var password = 's'
    
    Tas_users.findOne({
  where: {
    USER_NAME: username,
    PASSWORD: password
    }
}).then(function(result){
  
                                                if(result)
                                                { 
                                                    if(result.IS_ADMIN === true)
                                                    {
                                                        return response.json({ msg:'server running'});
                                                       }
                                                          else
                                                {
                                                     return response.json({ msg:'waiting'});   }

                                                }   
                                                else
                                                {

                                                response.status(403).send({msg: 'failed'});
                                                }    
                         });
      
   
 

   
 });
export { userRouter };
