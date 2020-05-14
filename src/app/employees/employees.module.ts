import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesPage } from '@/app/employees/employees.page';
import { EmployeesListPage } from '@/app/employees/list/employees-list.page';
import { EmployeesPageRoutingModule } from '@/app/employees/employees-routing.module';
import { EmployeesDetailPage } from '@/app/employees/list/detail/employees-detail.page';
import { EmployeeActionsComponent } from '@/app/employees/list/detail/actions/employee-actions.component';
import { EmployeeFormComponent } from '@/app/employees/list/detail/actions/employee-form.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        EmployeesPageRoutingModule
    ],
    entryComponents: [ EmployeeActionsComponent, EmployeeFormComponent ],
    declarations: [
        EmployeesPage,
        EmployeesListPage,
        EmployeesDetailPage,
        EmployeeActionsComponent,
        EmployeeFormComponent
    ]
})
export class EmployeesPageModule {
}
