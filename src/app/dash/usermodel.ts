export class User {
  constructor(
    
    public username: string,
    public password: string
    
    
  ) {  }
}

export class Test_invoice 
{
 constructor(  
    public SI_NO : number,
    public CUS_NAME: string,
    public DOC_NAME: string,
    public TOTAL_INC_TAX: number,
    public GROSS_TOTAL : number
  ) {  }
}

export class Super_invoice
{
   constructor(  
    public captain : Test_invoice,
    public ITEM_ARRAY : Products 
      
  ) {  }
}

export class Products {
  constructor(
    
    public ID: string,
    public PRODUCT_NAME: string,
    public CODE: string,
    public PRICE: number,
    public QUANTITY: number,
    public TOTAL_ITEM_COST: number,
    public TOTAL_INC_TAX: number,
    public GST_SLAB: number
    
  ) {  }
}

export class Pdt{
  constructor(
        public PRODUCT_NAME: string,
            ) {  } }

export class invoice {
  constructor(
  
 public invoice_number: number,
 
  public  items:Products[],
  public  cus_name: string,
  public  cus_address: string,
  public  cus_phone: number,
  public  doc_name: string,
  public  doc_contact_no: number,
  public  sub_total: number,
  public  total_tax: number,
  public  gross_total: number,
  


  ) {} }

export class pro_exp 
{
 constructor(  
    public SI_NO : number,
    public PRODUCT_NAME: string,
    public DATEOFPUR: Date,
    public DATEOFEXP: Date,
    public BATCH : number,
    public HSN : number,

  ) {  }
}
 




