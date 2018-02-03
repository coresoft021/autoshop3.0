import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { NgModule } from '@angular/core';
import { Set1Component } from './test/set1';

export const routes: Routes = [ 
    { path:'', redirectTo: '/set1', pathMatch: 'full' },
    { path: '', component: Set1Component},
    { path: 'login', component: Set1Component },
   
   
  
      
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
