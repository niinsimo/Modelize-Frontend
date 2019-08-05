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

import { AngularResizedEventModule } from 'angular-resize-event';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatButtonModule }  from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material';
import { MoleculesModelComponent } from './molecules-model/molecules-model.component'

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    NavComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ModelsListComponent,
    SplitViewerComponent,
    HomeComponent,
    MoleculesModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSplitModule,
    DeferLoadModule,
    AngularResizedEventModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule ,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FlexLayoutModule,
    MatGridListModule
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
