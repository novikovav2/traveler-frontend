import {Component} from "@angular/core";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {AUTH_URL, LOGIN, MSG_ERROR, MSG_FORGOT_PASSWORD} from "../../consts";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LoginData} from "../services/auth.models";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../scss/auth.component.scss']
})
export class ForgotPasswordComponent {
  logo = faLocationDot
  spinnerShow = false
  AUTH_URL = AUTH_URL
  LOGIN = LOGIN

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) {  }

  onSubmit() {
    this.spinnerShow = true
    const email = this.form.controls['email'].value
    if (email) {
      const data: LoginData = { email }
      this.auth.forgotPassword(data)
        .subscribe({
          next: () => {
            this.toastr.success(MSG_FORGOT_PASSWORD)
            this.router.navigate([AUTH_URL, LOGIN])
          },
          error: (error) => {
            console.log(error)
            this.toastr.error(MSG_ERROR)
            this.spinnerShow = false
          }
        })
    }
  }

}
