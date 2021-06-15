import { Component } from "@angular/core";

import { IEmployee } from "src/app/models/employee";

const EMPLOYEE_DATA: IEmployee[] = [
    {id: 1, name: 'Sahil', gender: 'Male', age: 32, salary: 10079},
    {id: 2, name: 'Dhwani', gender: 'Female', age: 31, salary: 2079},
    {id: 3, name: 'Sourab', gender: 'Male', age: 29, salary: 1079},
    {id: 4, name: 'Rahul', gender: 'Male', age: 31, salary: 10079},
    {id: 5, name: 'Megha', gender: 'Female', age: 27, salary: 10079}
  ];

@Component({
    selector:'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

    displayedColumns: string[] = ['id', 'name', 'gender', 'age', 'salary'];
    dataSource = EMPLOYEE_DATA;
}