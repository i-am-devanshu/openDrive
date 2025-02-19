import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  {
    path: 'auth',
    component:AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'main',
    component:MainAppComponent,
    loadChildren: () => import('./main-app/main-app.module').then(m => m.MainAppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
