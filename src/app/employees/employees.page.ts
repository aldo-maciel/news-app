import { Component } from '@angular/core';
import { EmployeesListPage } from '@/app/employees/list/employees-list.page';

@Component({
    selector: 'app-employees',
    templateUrl: 'employees.page.html'
})
export class EmployeesPage {
    public rootPage: any = EmployeesListPage;
}
