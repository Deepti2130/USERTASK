import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UserformComponent } from './shared/component/users/userform/userform.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"users/addusers",
    component:UserformComponent
  },
  {
    path:"users/:userid",
    component:UserComponent
  },
  {
    path:"users/:userid/edit",
    component:UserformComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"fairs",
    component:FairsComponent
  },
  {
    path:"pagenotfound",
    component:PagenotfoundComponent
  },
  {
    path:"**",
   redirectTo:"pagenotfound"
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
