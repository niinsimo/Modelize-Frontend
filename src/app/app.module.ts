import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from "./interceptor/auth.interceptor";

import { AuthService } from "./service/auth.service";

import { AuthGuard } from "./guard/auth.guard";

import { ProfileComponent } from './profile/profile.component';
import { ModelsListComponent } from './models-list/models-list.component';

import { DeferLoadModule }  from '@trademe/ng-defer-load';
import { SplitViewerComponent } from './split-viewer/split-viewer.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    NavComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ModelsListComponent,
    SplitViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSplitModule,
    DeferLoadModule
  ],
  providers: [AuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
