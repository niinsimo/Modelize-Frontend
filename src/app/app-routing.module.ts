import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";

import {AuthGuard} from "./guard/auth.guard";
import { ModelsListComponent } from './models-list/models-list.component';

const routes: Routes = [
  { path: 'model', component: ModelComponent },
  { path: 'models-list', component: ModelsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
