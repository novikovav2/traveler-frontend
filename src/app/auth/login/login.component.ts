import {Component} from "@angular/core";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {AUTH_URL, FORGOT_PASSWORD, MSG_ERROR, REGISTRATION, ROOT_URL} from "../../consts";
import {Router} from "@angular/router";
import {LoginData} from "../services/auth.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../scss/auth.component.scss']
})
export class LoginComponent {
  logo = faLocationDot
  spinnerShow = false
  AUTH_URL = AUTH_URL
  REGISTRATION = REGISTRATION
  FORGOT_PASSWORD = FORGOT_PASSWORD

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) {  }

  onSubmit() {
    this.spinnerShow = true
    const data: LoginData = {
      email: this.form.controls['email'].value || '',
      password: this.form.controls['password'].value || '',
    }
    this.auth.login(data)
      .subscribe({
        next: () => {
          this.router.navigate([ROOT_URL])
        },
        error: (error) => {
          console.log(error)
          this.toastr.error(MSG_ERROR)
          this.spinnerShow = false
        }
      })
  }
}
