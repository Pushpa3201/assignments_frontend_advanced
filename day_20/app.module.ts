import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgStyle} from '@angular/common';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpsComponent } from './emps/emps.component';
import { ProductsComponent } from './products/products.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { GradepipePipe } from './gradepipe.pipe';
import { UserComponentComponent } from './user-component/user-component.component';
import { DetailsComponent } from './details/details.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    DeptsComponent,
    EmpsComponent,
    ProductsComponent,
    StudentsListComponent,
    GradepipePipe,
    UserComponentComponent,
    DetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgStyle,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
