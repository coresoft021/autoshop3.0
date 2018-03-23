import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { NgModule } from '@angular/core';
import { DashComponent } from  './dash/dash';
import { Stock_view } from './stock/view/stock_view';
import { AddproductComponent } from './stock/add/add_stock_item_new';
import { Stockentry } from './stock/entry/stock_entry';

const routes: Routes = [
    { path: '',component:DashComponent  },
     { path: 'login',component: DashComponent },
    { path: 'dash', component: DashComponent },
   { path: 'reciept', component: DashComponent },
   {path: 'stock_view', component: Stock_view},
   {path: 'add_new_product',component: AddproductComponent},
   { path: 'stock_entry',component:Stockentry}, 
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }




