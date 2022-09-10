import {Component} from "@angular/core";
import {faLocationDot, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../scss/main.component.scss']
})
export class HeaderComponent {
  logo = faLocationDot
  searchBtn = faMagnifyingGlass
  searchText = new FormControl('', [Validators.required])
  iconUrl = "https://via.placeholder.com/38x38/FF9900"

  onSearch() {
    console.log(this.searchText.value)
  }

  showMenu() {

  }
}
