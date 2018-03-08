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

@Component({
  selector: 'test',
  templateUrl: 'test.html',
  styleUrls: ['test.css']
})
export class TestExample implements OnInit {
 
   myinvoice : Super_invoice [] =[]; 
   isPrint : boolean = true;
   mm : any = []
   today: number = Date.now();
   subinvoi = new Super_invoice(this.mm,this.mm);
   subinvoice = new invoice(1,[],'','',8,'',2,0,0,0);
   PdtCtrl : FormControl ;
   invoice_number : FormControl ;
   filteredpdts: Observable<any[]>;
   product_list : Products[]=[];
   invoice_number_gets : number;
   readed_slab : number = 0;
   item_price : number[] =[];
   i : number = -1;
   k : number = -1;
   z : number = -1;
   qtylist : number[] = [];
    total_tax :number = 0;
    disabled_button : boolean =true; 
    j : number = 0;
    sub_total: number = 0;
    grand_total: number = 0;
   readed_cost : number = 0;
   selecteditem : Products = new Products('','','',2,0,0,0,0);

    constructor(private router: Router ,private ds: DataService, private formBuilder: FormBuilder) {
     this.PdtCtrl = new FormControl();
   
      this.invoice_number = new FormControl();
     this.filteredpdts = this.PdtCtrl.valueChanges.pipe(
        startWith(''),
        map(state => state ? this.filterpdts(state) : this.product_list.slice())
      );
    
  }
   filterpdts(name: any) {
    return this.product_list.filter(state =>
      state.PRODUCT_NAME.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
 


  ngOnInit()  {
                    this.getproduct_list();
                    this.invoice_number_gets = this.ds.getinvoicenumber();
                  
                    //  setInterval(() => {         //replaced function() by ()=>
                    //  this.today =  Date.now();
                    //  // just testing if it is working
                    //  }, 1000);
              }

   getproduct_list() : void{
      this.ds.getproduct_list().then(P_list=> this.product_list = P_list )
  
  }

  hi()
  {

     this.myinvoice.push({ "captain":({"SI_NO":0,"CUS_NAME":"hi","DOC_NAME":"ji","TOTAL_INC_TAX":9,"GROSS_TOTAL":0}) ,
     
     "ITEM_ARRAY": ({"ID":"","PRODUCT_NAME":"","CODE":"","PRICE":0,"QUANTITY":1,"TOTAL_ITEM_COST":0,"TOTAL_INC_TAX":0,"GST_SLAB":0 }) 
      })
  }

   addItem()
  {
        this.i = this.i+1;
        this.z = this.z+1;
        // if  (this.z<this.i)
        // {
        // this.z = this.i  }
        // else
        // {


        // }
                if(this.z === 0)
                {
                         this.disabled_button = true;
                         this.hi();

      
     
                  this.subinvoice.items.push({
                                                  "ID":"1",
                                                  
                                                  "PRODUCT_NAME":"",
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
    this.hi();
                      this.subinvoice.items.push({
                                                  "ID":"1",
                                                  
                                                  "PRODUCT_NAME":"",
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

 onSelect(item: Products): void {
    this.selecteditem = item;
  }
get_index(m: any)
    {

      this.k = m;
    }
focusFunction()
{
   this.i = this.k;
   if(this.z<this.i)
   {
     this.z=this.i;
   }
}

changeqty(a: any)
{

this.subinvoice.items[this.k].QUANTITY = a;
this.myinvoice[this.k].ITEM_ARRAY.QUANTITY = a;
this.item_price[this.k] = this.subinvoice.items[this.k].QUANTITY * this.myinvoice[this.k].ITEM_ARRAY.PRICE;

}
   readValue ( a: number , b: string , c: number)
  {    
      
   this.readed_cost = a;
   this.subinvoice.items[this.i].PRODUCT_NAME = b; 
   this.subinvoice.items[this.i].PRICE=this.readed_cost;
   this.readed_slab = c;
   this.subinvoice.items[this.i].GST_SLAB=this.readed_slab;
   this.pushinvo(b,a,1,c);

 }
viewarray()
{
    console.log('array', this.myinvoice);
    console.log('i=', this.i);
    console.log('j=', this.j);
    console.log('k=', this.k);
    console.log('z=', this.z);
    console.log('qtylist',this.qtylist);
    console.log('item price ',this.item_price);

    
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




window.print();
}
}


