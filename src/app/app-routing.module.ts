import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { EmailverifyComponent } from './components/emailverify/emailverify.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavbarComponent },
  { path: '', component: PrincipalComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recoveryPassword', component: RecoveryPasswordComponent },
  { path: 'verify', component: EmailverifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
