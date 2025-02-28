import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAppComponent } from './main-app.component';
const routes: Routes = [
  {
    path: "",
    component: MainAppComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }