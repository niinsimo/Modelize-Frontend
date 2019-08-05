import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";

import {AuthGuard} from "./guard/auth.guard";
import { ModelsListComponent } from './models-list/models-list.component';
import { SplitViewerComponent } from './split-viewer/split-viewer.component';
import { HomeComponent } from './home/home.component';
import { MoleculesModelComponent } from './molecules-model/molecules-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'model', component: ModelComponent },
  { path: 'models-list', component: ModelsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'split-viewer', component: SplitViewerComponent },
  { path: 'molecules-model', component: MoleculesModelComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
