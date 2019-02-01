import { Request, Response, Router } from "express";
import { Sequelize, sequelize } from './dbcon';
import { Tas_users } from '../models/tas_users';
import mysqldump  from 'mysqldump'

const loginRouter: Router = Router();
loginRouter.get("/", (request: Request, response: Response) => {

  response.json('ji');
});

loginRouter.get("/backup", (request: Request, response: Response) => {
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'ifelseif',
        database: 'papercups',
    },
    dumpToFile: './papercups.sql',
}).then(function(backup){
   if(backup)
   {
     response.json('Backup completed');
   }
  else if(Error)
  {
     response.json('Error');
  }

})
 

});


 loginRouter.post('/login_check', (request: Request, response: Response) => {
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


  loginRouter.post('/server_check', (request: Request, response: Response) => {
   var username = 'a'
   var password = 's'
   var mac = '54:53:ED:2F:6F:6E' 
    Tas_users.findOne({
  where: {
    USER_NAME: username,
    PASSWORD: password,
    MAC : mac
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

export { loginRouter };






