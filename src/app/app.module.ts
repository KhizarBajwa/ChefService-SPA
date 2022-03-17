import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import { CategoryService } from './services/category.service';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { DishService } from './services/dish.service';
import { LoginService } from './services/login.service';
import { MealService } from './services/meal.service';
import { RegisterService } from './services/register.service';
import { RegisterAChefService } from './services/registerAChef.service';
import { RequestAChefService } from './services/requestAChef.service';
import { RequestADishService } from './services/requestADish.service';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ChefComponent } from './chef/chef.component';
import { ChefListComponent } from './chef-list/chef-list.component';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { MealComponent } from './meal/meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { RequestAMealComponent } from './request-a-meal/request-a-meal.component';
import { RequestADishComponent } from './request-a-dish/request-a-dish.component';
import { RequestAChefComponent } from './request-achef/request-achef.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAChefComponent } from './register-a-chef/register-a-chef.component';


import { NgbdDatepickerPopup } from './datepicker/datepicker-popup';
import { ChefService } from './services/chef.service';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    ChefComponent,
    ChefListComponent,
    DishComponent,
    DishListComponent,
    MealComponent,
    MealListComponent,
    RequestAMealComponent,
    RequestADishComponent,
    RequestAChefComponent,
    ConfirmationDialogComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAChefComponent,

    NgbdDatepickerPopup,
     ContactusListComponent,
     ContactusComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CategoryService,
    ConfirmationDialogService,
    DishService,
    ChefService,
    LoginService,
    MealService,
    RegisterService,
    RegisterAChefService,
    RequestAChefService,
    RequestADishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
