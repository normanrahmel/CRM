import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user.component';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { StartComponent } from './start/start.component';

import { ImprintComponent } from './imprint/imprint.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogEditAdressComponent } from './dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogEditTodosComponent } from './dialog-edit-todos/dialog-edit-todos.component';
import { HelpComponent } from './help/help.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    StartComponent,
    ImprintComponent,
    DataProtectionComponent,
    DialogAddUserComponent,
    DialogEditAdressComponent,
    DialogEditUserComponent,
    DialogEditTodosComponent,
    HelpComponent,
  ],
  imports: [
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatCardModule,
    BrowserModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
