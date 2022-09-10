import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AUTH, ROOT} from "./consts";

const routes: Routes = [
  {
    path: AUTH,
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: ROOT,
    loadChildren: () => import('./main/main.module')
      .then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
