import {Component} from "@angular/core";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LoginData} from "../services/auth.models";
import {AUTH_URL, LOGIN, MSG_ERROR, MSG_REGISTRATION_SUCCESS} from "../../consts";
import {PasswordsMatchedValidator} from "../services/password-match.directive";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../scss/auth.component.scss']
})
export class RegistrationComponent {
  logo = faLocationDot
  spinnerShow = false
  AUTH_URL = AUTH_URL
  LOGIN = LOGIN

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
  }, {validators: [PasswordsMatchedValidator]})

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) {  }

  onSubmit() {
    const password = this.form.controls['password'].value || ''
    const password_confirmation = this.form.controls['password_confirmation'].value || ''
    if (password.length > 0 && password === password_confirmation ) {
      this.spinnerShow = true
      const data: LoginData = {
        email: this.form.controls['email'].value || '',
        password
      }
      this.auth.registration(data)
        .subscribe({
          next: () => {
            this.toastr.success(MSG_REGISTRATION_SUCCESS)
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
