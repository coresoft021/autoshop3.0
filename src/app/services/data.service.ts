import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

    
  
    total = 0;
    
    constructor(private http: Http) { }


createpdt_table(model:any)
    {
         let body= JSON.stringify(model); 
      
       
              console.log('body',body);
        
        return this.http.get('https://papercups.herokuapp.com/api/public/create_pdt_table', { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


 getinvoicenumber() : number
{
return 10;

}


  
     


     addproduct(model:any) {

        let body= JSON.stringify(model); 
       
       
           //   console.log('body',body);
        
        return this.http.post('https://papercups.herokuapp.com/api/public/add_new_product', body, { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    } 
    
    addpdt_det(model:any)
           {

               let body= JSON.stringify(model); 
                console.log('body',body);
              

                return this.http.post('https://papercups.herokuapp.com/api/public/add_product_det', body, { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                    console.log('inside',postr);
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
           }


  
  get_total()
  {
    return this.total;
  }
  
  get_username()
  {
   
  }

post_invoice(model:any){

        let body= JSON.stringify(model); 

         console.log('body',body)
        return this.http.post('https://papercups.herokuapp.com/api/public/post_invoice', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    

}
    adduser(model:any) {

        let body= JSON.stringify(model); 

        
        return this.http.post('https://assespmkvy.herokuapp.com/api/public/add_user', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    }

    // getpdt_exp_dets(model:any)  : Promise<pro_exp[]> 
    //         {
    //               let body = JSON.stringify(model); 
    //            return this.http.post('https://papercups.herokuapp.com/api/public/list_expired_products',body,{ headers : contentHeaders})
    //               .toPromise()
    //               .then(res => <pro_exp[]> res.json(), this.handleError)
    //               .then(data => { console.log(data); return data; }); 

    //          }



    private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
