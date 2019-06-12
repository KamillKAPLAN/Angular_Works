import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactiveGuardService } from './employees/create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

const appRoutes : Routes = [
  { path : 'list', component : ListEmployeesComponent },
  { 
    path : 'create', 
    component : CreateEmployeeComponent,
    canDeactivate : [CreateEmployeeCanDeactiveGuardService] 
  },
  { path : 'employees/:id', component : EmployeeDetailsComponent },
  { path : '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactiveGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
