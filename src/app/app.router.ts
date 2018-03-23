import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { NgModule } from '@angular/core';
import { DashComponent } from  './dash/dash';



const routes: Routes = [
    { path: '',component:DashComponent  },
     { path: 'login',component: DashComponent },
    { path: 'dash', component: DashComponent },
   { path: 'reciept', component: DashComponent },


   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }




