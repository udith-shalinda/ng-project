import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { SeversComponent } from './severs/severs.component';
import { SubServerComponent } from './severs/sub-server/sub-server.component';
import { LoginComponent } from './home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './home/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    SeversComponent,
    SubServerComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
