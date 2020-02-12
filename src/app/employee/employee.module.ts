import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import{EmployeeRoutingModule} from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent
  ],
  
})
export class EmployeeModule { }