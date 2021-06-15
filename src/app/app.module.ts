import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { WelcomeDialogComponent } from './components/commonComponents/dialogs/welcome-dialog/welcome-dialog.component';
import { FooterComponent } from './components/commonComponents/layout/footer/footer.component';
import { HeaderComponent } from './components/commonComponents/layout/header/header.component';
import { SidebarComponent } from './components/commonComponents/layout/sidebar/sidebar.component';
import { DashboardComponent } from './components/applicationComponents/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule 
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WelcomeDialogComponent,
    DashboardComponent
  ],
  entryComponents: [
    WelcomeDialogComponent
  ],
  exports:[
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
