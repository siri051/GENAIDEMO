import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartSuccessComponent } from './cart-success/cart-success.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   // other routes
   { path: 'register', component: RegisterComponent },
   // login route if not already added
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
   
  { path: 'cart-success', component: CartSuccessComponent },
  { path: 'home', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
