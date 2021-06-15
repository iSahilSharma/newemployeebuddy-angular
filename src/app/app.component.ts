import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './components/commonComponents/dialogs/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

 constructor(private dialog: MatDialog){
   this.dialog.open(WelcomeDialogComponent, {})

 }

}
