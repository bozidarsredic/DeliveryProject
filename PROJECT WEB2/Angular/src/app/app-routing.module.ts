import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UdComponent } from './ud/ud.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'ud',component:UdComponent,canActivate:[AuthGuard]},
  {path:'map',component:MapComponent,canActivate:[AuthGuard]},
 // {path:'home',component:HomeComponent},
  {path:'ud/:username',component:UdComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
