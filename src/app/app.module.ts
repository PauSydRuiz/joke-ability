import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokesComponent } from './jokes/jokes.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { JokeListComponent } from './joke-list/joke-list.component';
import { ProfileComponent } from './profile/profile.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    JokesComponent,
    AccountCreationComponent,
    JokeListComponent,
    ProfileComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
   
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
