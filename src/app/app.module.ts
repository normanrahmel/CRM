import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { StartComponent } from './start/start.component';
import { OrganisationDetailComponent } from './organisation-detail/organisation-detail.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, UserComponent, OrganisationComponent, LoginComponent, UserDetailComponent, StartComponent, OrganisationDetailComponent, ImprintComponent, FooterComponent, DataProtectionComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
