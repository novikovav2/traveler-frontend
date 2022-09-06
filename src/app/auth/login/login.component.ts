import {Component} from "@angular/core";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {MSG_ERROR, ROOT_URL} from "../../consts";
import {Router} from "@angular/router";
import {LoginData} from "../auth.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent {
  logo = faLocationDot

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private toastr: ToastrService,
              private router: Router) {  }

  onSubmit() {
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
        }
      })
  }
}
