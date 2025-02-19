import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAppRoutingModule } from './main-app-routing.module';
import { RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MainAppComponent
  ],
  imports: [
    CommonModule,
    MainAppRoutingModule,
  ],
  exports:[]
})
export class MainAppModule { }
