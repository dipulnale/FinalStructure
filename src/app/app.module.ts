import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { VegetableComponent } from "./component/vegetable/vegetable.component";
import { LoginComponent } from "./component/login/login.component";
import { OrderComponent } from "./component/order/order.component";
import { BillComponent } from "./component/bill/bill.component";
import { AdminComponent } from "./component/admin/admin.component";
import { FeedbackComponent } from "./component/feedback/feedback.component";
import { SignupCustomerComponent } from "./component/signup-customer/signup-customer.component";
import { SignupAdminComponent } from "./component/signup-admin/signup-admin.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegetableComponent,
    LoginComponent,
    OrderComponent,
    BillComponent,
    AdminComponent,
    FeedbackComponent,
    SignupCustomerComponent,
    SignupAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
