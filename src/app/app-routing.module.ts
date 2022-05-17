import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';

// import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path:'manager-home', component: ManagerHomeComponent},
  { path:'employee-home', component: EmployeeHomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
