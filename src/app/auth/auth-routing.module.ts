import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const redirectUnauthorizedToHome = () =>
  redirectLoggedInTo(['/'])

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectUnauthorizedToHome)
  },
  {
    path: 'registro',
    component: SignupComponent,
    ...canActivate(redirectUnauthorizedToHome)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
