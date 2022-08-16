import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HelpComponent } from './help/help.component';
import { ImprintComponent } from './imprint/imprint.component';

import { StartComponent } from './start/start.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'User', component: UserComponent },
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
