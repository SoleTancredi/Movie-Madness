import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent, LoginModule } from './login';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    //     loadChildren: () =>
    //       import('./login/login.module').then((m) => m.LoginModule),
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
