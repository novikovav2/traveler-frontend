import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {AUTH_URL, LOGIN, MSG_ERROR, MSG_RESET_PASSWORD_SUCCESS} from "../../consts";
import {LoginData} from "../services/auth.models";
import {PasswordsMatchedValidator} from "../services/password-match.directive";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../scss/auth.component.scss']
})
export class ResetPasswordComponent {
  id: string = ''
  AUTH_URL = AUTH_URL
  LOGIN = LOGIN
  logo = faLocationDot
  spinnerShow = false

  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
  }, {validators: [PasswordsMatchedValidator]})

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id') || ''
  }

  onSubmit() {
    const password = this.form.controls['password'].value || ''
    const password_confirmation = this.form.controls['password_confirmation'].value || ''
    if (password.length > 0 && password === password_confirmation ) {
      this.spinnerShow = true
      const data: LoginData = { password }
      this.auth.resetPassword(this.id, data)
        .subscribe({
          next: () => {
            this.toastr.success(MSG_RESET_PASSWORD_SUCCESS)
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
