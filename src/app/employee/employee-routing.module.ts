import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';

// const routes: Routes = [];
const appRoutes: Routes = [

  { path: 'employees', children:[
    { path: '', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit/:id', component: CreateEmployeeComponent },
  
  ] },

  
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
