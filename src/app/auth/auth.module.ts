import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./login/login.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "./services/auth.service";
import {RegistrationComponent} from "./registration/registration.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {HeaderComponent} from "./header/header.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    ResetPasswordComponent
  ],
  exports: [ ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
