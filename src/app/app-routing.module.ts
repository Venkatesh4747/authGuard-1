import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './login/not-found/not-found.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  // {path:'**',component:NotFoundComponent},
  {path:'admin',
  canActivate:[AuthGuard],
  loadChildren:()=>import('./modules/admin/admin.module').then(mod=>mod.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
