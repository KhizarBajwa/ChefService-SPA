import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefComponent } from './chef/chef.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'chefs', component: ChefListComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'chef/:id', component: ChefComponent },

  { path: 'dishes', component: DishListComponent },
  { path: 'dish', component: DishComponent },
  { path: 'dish/:id', component: DishComponent },

  { path: 'categories', component: CategoryListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryComponent },

  { path: 'contactusList', component: ContactusListComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'contactus/:id', component: ContactusComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
