import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AUTH} from "./consts";

const routes: Routes = [
  {
    path: AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
