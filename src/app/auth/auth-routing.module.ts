import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {FORGOT_PASSWORD, LOGIN, REGISTRATION} from "../consts";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
      { path: '', pathMatch: "full", redirectTo: LOGIN },
      { path: LOGIN, component: LoginComponent },
      { path: REGISTRATION, component: RegistrationComponent },
      { path: FORGOT_PASSWORD, component: ForgotPasswordComponent }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
