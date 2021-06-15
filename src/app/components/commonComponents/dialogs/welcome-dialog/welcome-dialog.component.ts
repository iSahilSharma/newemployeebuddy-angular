import { Component } from "@angular/core";

import { IUserConfiguration } from "src/app/models/userConfiguration";

@Component({
    selector: 'welcome-dialog',
    templateUrl: './welcome-dialog.component.html',
    styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent {
    userConfig: IUserConfiguration = {} as IUserConfiguration;
    countries: string[] = ["India", "France", "Germany"];

    constructor() {

    }

    onSubmit() {
    }
}