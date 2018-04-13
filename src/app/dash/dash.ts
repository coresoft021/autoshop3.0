


import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from '../services/data.service';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Super_invoice } from '../dash/usermodel';
import { invoice } from '../dash/usermodel';
import { Products } from '../dash/usermodel';
import { post_invoice } from '../dash/usermodel'; 
import { Test_invoice } from '../dash/usermodel'; 
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dash',
  templateUrl: 'dash.html',
  styleUrls: ['dash.css']
})
export class Dashcomponent implements OnInit {
 
model4: any;
    arrayOfKeyValues: any[] = []
     


   myinvoice : Super_invoice [] =[]; 
   isPrint : boolean = true;
   mm : any = []
   today: number = Date.now();
  pdt_list : string [] =[];
   subinvoice = new invoice(1,[],'','',8,'',2,0,0,0);
  
   posting_invo = new post_invoice(1,new Test_invoice(2,'','',3,3),[]);
   products_list : string[] = [''];
   invoice_number : FormControl ;
  
   product_list : Products[]=[];
   invoice_number_gets : number;
   
   item_price : number[] =[];
   i : number = -1;
   k : number = -1;
   z : number = -1;
   l : boolean = false;
   qtylist : number[] = [];
    total_tax :number = 0;
    disabled_button : boolean =true; 
    j : number = 0;
    sub_total: number = 0;
    grand_total: number = 0;
    readed_cost : number = 0;
    selecteditem : Products = new Products('','','',2,0,0,0,0);
   
    constructor(private router: Router ,private ds: DataService, private formBuilder: FormBuilder, private ps: PostService) {
    
     
      this.invoice_number = new FormControl();
       
    
  }
  
 


  ngOnInit()  {
                      // this.addItem();
                    this.getproduct_list();
                    this.invoice_number_gets = this.ds.getinvoicenumber();
                   
            
                
              }

   getproduct_list() : void{
      this.ds.getproduct_list().then(P_list=> this.product_list = P_list )
       this.ds.getproduct_list().then(P_list=> this.arrayOfKeyValues = P_list )
  
  }



  onTabKey(x:any)
{
      
      this.products_list[this.k] = x;
      console.log('array', this.myinvoice);
      
      

}



  onSelect(item: Products,c:any): void {
          this.selecteditem = item; 
           this.k = c;
           
       }
make_selected_item(p:any)
{
  let s : any; 
 this.l = this.check_existing_pdt(p)
s = this.product_list.filter(xi=> xi.PRODUCT_NAME === p);
this.selecteditem.PRODUCT_NAME = s[0].PRODUCT_NAME;
this.selecteditem.GST_SLAB = s[0].GST_SLAB;
this.selecteditem.PRICE = s[0].PRICE;





}
 
change_qty(a:any)
{

  
  this.make_selected_item(this.products_list[this.k]);
 
this.myinvoice[this.k].ITEM_ARRAY.QUANTITY = a;
this.pushinvo(this.selecteditem.PRODUCT_NAME,this.selecteditem.PRICE,a,this.selecteditem.GST_SLAB);
this.item_price[this.k]=this.selecteditem.PRICE*this.qtylist[this.k];



}
 check_existing_pdt(xa :any) : boolean
 {
   if (this.products_list.some(x=>x === 'calpol'))
   {
     return true;
   }
   else
   {
 return false;
 }
 }
focusFunction()
{
   
   this.i = this.k;
   if(this.z<this.i)
   {
     this.z=this.i;
   }

   
}






viewarray()
{

  
   this.posting_invo.length = this.z;
   this.posting_invo.invo.CUS_NAME = 'deww';
   this.posting_invo.invo_det.push({"ID":'',"PRODUCT_NAME":'hi',"CODE":'R',"PRICE":2,"QUANTITY":1,"TOTAL_ITEM_COST":3,
   "TOTAL_INC_TAX":7,"GST_SLAB":5 })
   this.posting_invo.invo_det[0].PRODUCT_NAME='CAL';
    
    console.log('qtylist',this.qtylist);

     this.ps.submit(this.qtylist);
     
    
}
  
cal_tax()
{
 

this.sub_total = 0 ;
 this.total_tax = 0;
  for(this.j=0;this.j<=this.z;this.j++)
  {
    
    this.myinvoice[this.j].ITEM_ARRAY.TOTAL_INC_TAX = this.item_price[this.j] * this.myinvoice[this.j].ITEM_ARRAY.GST_SLAB/100 ;

    this.sub_total = this.sub_total + this.item_price[this.j];
     this.total_tax = this.total_tax + this.myinvoice[this.j].ITEM_ARRAY.TOTAL_INC_TAX;
   }
  
  this.total_tax =  Math.round(this.total_tax * 100) / 100
     
console.log('tax accumilated', this.total_tax);
this.grand_total = this.sub_total + this.total_tax;
} 



print_invoice()
{
  this.ds.add_invo_product(this.z) ;

  //window.print();
}

  sample_push()
  {

     this.myinvoice.push({ "captain":({"SI_NO":0,"CUS_NAME":"hi","DOC_NAME":"ji","TOTAL_INC_TAX":9,"GROSS_TOTAL":0}) ,
     
     "ITEM_ARRAY": ({"ID":"","PRODUCT_NAME":"","CODE":"","PRICE":0,"QUANTITY":1,"TOTAL_ITEM_COST":0,"TOTAL_INC_TAX":0,"GST_SLAB":0 }) 
      })
  }

   

    

   addItem()
  {
 
        this.i = this.i+1;
        this.z = this.z+1;
       
       
                if(this.z === 0)
                {
                         this.disabled_button = true;
                         this.sample_push();

      
     
                  this.subinvoice.items.push({
                                                  "ID":"1",
                                                  
                                                  "PRODUCT_NAME":"a",
                                                  "CODE":"",
                                                  "PRICE":0,
                                                  "QUANTITY":1,
                                                  "TOTAL_ITEM_COST":0,
                                                  "TOTAL_INC_TAX":0,
                                                  "GST_SLAB":0
                                                })
                 
                                     
   }
  
  else
  {

  
    this.disabled_button = false;
    this.sample_push();
                      this.subinvoice.items.push({
                                                  "ID":"1",
                                                  
                                                  "PRODUCT_NAME":"a",
                                                  "CODE":"",
                                                  "PRICE":0,
                                                  "QUANTITY":1,
                                                  "TOTAL_ITEM_COST":0,
                                                  "TOTAL_INC_TAX":0,
                                                  "GST_SLAB":0
                                                })

                                                this.pushinvo(this.selecteditem.PRODUCT_NAME,
                                                 this.selecteditem.PRICE,this.selecteditem.QUANTITY,this.selecteditem.GST_SLAB);
      
  }

  

   }           
  
  
   removeItem()
  {
    this.z = this.z-1;
     
     
     
     if(this.z === 0)

   {

      this.disabled_button = true;
    }
    else
    {
      this.disabled_button = false;
    }

    this.subinvoice.items.pop();
  
    
    
  }  
   
  

pushinvo(pn : any, pr : any , qty : any, gst : any )
{
this.myinvoice[this.i].ITEM_ARRAY.PRODUCT_NAME = pn ;
this.myinvoice[this.i].ITEM_ARRAY.PRICE = pr ;
this.myinvoice[this.i].ITEM_ARRAY.GST_SLAB = gst;
this.myinvoice[this.i].ITEM_ARRAY.QUANTITY = qty;

}


}


