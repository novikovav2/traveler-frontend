import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule {}
