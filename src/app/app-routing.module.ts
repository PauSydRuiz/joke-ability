import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { JokesComponent } from './jokes/jokes.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'account-creation', component: AccountCreationComponent },
  
  // children: [
  //   { path: 'jokes', component: JokesComponent },
  // ]
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

