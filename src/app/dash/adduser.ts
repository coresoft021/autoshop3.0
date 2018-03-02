import {Component, OnInit, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";




@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private customerService: CustomerService, private productService: ProductService, private areaService: AreaService) {
  }

  ngOnInit() {
 
  }

  
  }

  

