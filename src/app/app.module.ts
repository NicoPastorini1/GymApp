import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
// componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomeComponent } from './components/home/home.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { RegisterComponent } from './components/register/register.component';

//librerias
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule} from 'primeng/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AngularFireModule } from '@angular/fire/compat'
import { ToastrModule } from 'ngx-toastr';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { EmailverifyComponent } from './components/emailverify/emailverify.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    HomeComponent,
    BeneficiosComponent,
    PricingComponent,
    RegisterComponent,
    SpinnerComponent,
    RecoveryPasswordComponent,
    EmailverifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    ProgressSpinnerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
