import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/login/login.component";
import { OrderComponent } from "./component/order/order.component";
import { SignupAdminComponent } from "./component/signup-admin/signup-admin.component";
import { SignupCustomerComponent } from "./component/signup-customer/signup-customer.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signupcustomer", component: SignupAdminComponent },
  { path: "signupadmin", component: SignupCustomerComponent },
  { path: "order", component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  SignupAdminComponent,
  SignupCustomerComponent,
  OrderComponent,
];
