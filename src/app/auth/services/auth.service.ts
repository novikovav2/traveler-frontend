import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {of} from "rxjs";
import {LoginData} from "./auth.models";

@Injectable()
export class AuthService {
  url = environment.apiUrl

  login(data: LoginData) {
    return of(data)
  }

  registration(data: LoginData) {
    return of(data)
  }
}
