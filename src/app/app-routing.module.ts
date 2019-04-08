import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { SeversComponent } from './severs/severs.component';
import { SubServerComponent } from './severs/sub-server/sub-server.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [{
  path:'users',
  component:UsersComponent
},
{
  path:'',
  component:HomeComponent,
  children:[
    {
      path:'login',
      component:LoginComponent
    }
  ]
    
  
},
{
  path:'servers',
  component:SeversComponent,
  children:[
    {
      path:':id/:name',
      component:SubServerComponent
      
    }
  ]
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
