import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './dashboard/editprofile/editprofile.component';
import { ViewprofileComponent } from './dashboard/viewprofile/viewprofile.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'transfer', component: TransferComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path: 'editprofile', component: EditprofileComponent},
    {path: 'viewprofile', component: ViewprofileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
