import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerCreateComponent } from './dash/adduser';
import { AppRoutingModule } from './app.router';
import { DashComponent } from './dash/dash';
import { LoginComponent } from './login/login';

import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from'./services/login.service';
import {DataService} from'./services/data.service'; 
import {CdkTableModule} from '@angular/cdk/table'
import {OverlayModule} from '@angular/cdk/overlay';
import 'hammerjs';

 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {
    MatAutocompleteModule,  MatButtonModule,  MatButtonToggleModule,  MatCardModule,  MatCheckboxModule,  MatChipsModule,  MatDatepickerModule,
  MatDialogModule,  MatExpansionModule,  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,
  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule,  MatSliderModule,
  MatSlideToggleModule,  MatSnackBarModule,  MatTabsModule,  MatToolbarModule,  MatTooltipModule,  MatSortModule,  MatPaginatorModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashComponent
  ],
       providers: [ AuthenticationService,DataService],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     CdkTableModule,    OverlayModule,
    MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    
   MatChipsModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,    MatGridListModule,    MatIconModule, 
   MatInputModule,    MatListModule,    MatMenuModule,   MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,   
   MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSlideToggleModule,    MatSliderModule,    MatSnackBarModule,
   MatTabsModule,    MatToolbarModule,    MatTooltipModule,    
    MatNativeDateModule,    MatSortModule,
    MatPaginatorModule,
  
    
    AppRoutingModule
    
  ],
 
 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
