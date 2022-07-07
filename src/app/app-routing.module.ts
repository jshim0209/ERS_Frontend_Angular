import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'manager-home', component: ManagerHomeComponent},
  { path:'employee-home', component: EmployeeHomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
