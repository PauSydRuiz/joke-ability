import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'account-creation', component: AccountCreationComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'joke-list', pathMatch: 'full' },
      { path: 'joke-list', component: JokeListComponent },
      { path: 'jokes', component: JokesComponent },
      { path: 'profile/:author', component: ProfileComponent,},
      //{ path: 'profile/:username', component: ProfileComponent },
      // { path: 'profile/:username/:id', component: ProfileComponent },    
      
    ],
  
  },
  // { path: 'profile/:author', component: ProfileComponent },
  // children: [
  //   { path: 'jokes', component: JokesComponent },
  // ]
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
