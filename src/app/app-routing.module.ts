import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListAccountComponent } from './account/list-account/list-account.component';

const routes: Routes = [
  {path:'list-customer', component:ListCustomerComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-customer',component:CreateCustomerComponent},
  {path:'list-account', component:ListAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
