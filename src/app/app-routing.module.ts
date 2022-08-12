import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HelpComponent } from './help/help.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LoginComponent } from './login/login.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'User', component: UserComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Organisation', component: OrganisationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'DataProtection', component: DataProtectionComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'Help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
