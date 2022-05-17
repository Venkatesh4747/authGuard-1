import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'dash',component:AdminDashboardComponent,children:[
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'service',component:ServicesComponent},
    {path:'about',component:AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
