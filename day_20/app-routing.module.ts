import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { EmpsComponent } from './emps/emps.component';
import { DeptsComponent } from './depts/depts.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{ path :  "", component : DemoComponent },
{ path :  "Emps", component : EmpsComponent, canActivate:[AuthService] },
{ path :  "Depts", component : DeptsComponent,  canActivate:[AuthService] },
{ path :  "Login", component : LoginComponent},
{ path :  "Logout", component : LogoutComponent, canActivate:[AuthService]},
{ path : "User-Component", component: UserComponentComponent, canActivate:[AuthService]},
{ path :  "Details/:id", component : DetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
