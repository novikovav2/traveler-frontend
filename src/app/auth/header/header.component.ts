import {Component} from "@angular/core";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['../scss/auth.component.scss']
})
export class HeaderComponent {
  logo = faLocationDot
}
