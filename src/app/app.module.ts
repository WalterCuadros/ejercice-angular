import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultComponent } from './components/default/default.component';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,SharedModule,FormsModule,HttpClientModule,routing
  ],
  providers: [
    appRoutingProviders,{provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
