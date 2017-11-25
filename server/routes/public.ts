import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_marks } from '../models/tas-marks';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});

publicRouter.get('/list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_users.findAll({
  attributes: ['ID','NAME','PASSWORD','CODE','MARK']
}).
then(users => {
  response.json({
  users
  });
 
});
});

publicRouter.get('/list_mark', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_marks.findAll({
  attributes: ['ID','NAME','TESTNUM','MARK']
}).
then(users => {
  response.json({
  users
  });
 
});
});



 publicRouter.get('/create_user_table', (request: Request, response: Response) => {
 Tas_users.sync({force: true}).then(() => {
  //Table created
  return Tas_users.create({
    NAME: 'q',
    CODE: 1,
    PASSWORD: 'a'
     });
 });
   
});


 publicRouter.get('/create_marks_table', (request: Request, response: Response) => {
 Tas_marks.sync({force: true}).then(() => {
  //Table created
  return Tas_marks.create({
    NAME: 'Prems021',
    TESTNUM: 11,
    MARK: 100
    
     });
 });
   
 });

 publicRouter.post('/submit_exam', (request: Request, response: Response) => {
 Tas_marks.create({
     NAME: request.body.names,
    TESTNUM: request.body.testnum,
    MARK: request.body.mark
     })
     
  return response.json({success:true, msg:'Successfully saved'});
     
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


 publicRouter.post('/add_test', (request: Request, response: Response) => {
 Tas_users.create({
    NAME: 'hi',
    CODE: 12,
    MARK: 10,
    PASSWORD: 'me'
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
