import { Component } from '@angular/core';
import { EmployeesService } from '@/app/employees/list/employees.service';
import { onError, onSuccess } from '@/shared/error';
import { EmployeeType } from '@/app/employees/list/employee-type';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
    employee: EmployeeType = {} as EmployeeType;
    close: (employee: EmployeeType) => {};

    constructor(private service: EmployeesService) { }

    onSave() {
        if (this.employee && this.employee.id) {
            this.onEdit();
        } else {
            this.onCreate();
        }
    }

    async onEdit() {
        const { data, status } = await this.service.update(this.employee.id, this.employee);

        status === 'success'
            ? onSuccess('Successfully updated')
            : onError('Error on updating');

        this.close(data || this.employee);
    }

    async onCreate() {
        // ugly code :(
        const { employee_salary: salary, employee_age: age, employee_name: name } = this.employee;
        const { data, status } = await this.service.create({ salary, age, name });

        status === 'success'
            ? onSuccess('Successfully created')
            : onError('Error on updating');

        // tslint:disable-next-line:variable-name
        const { salary: employee_salary, age: employee_age, name: employee_name, id } = data;
        this.close({ employee_salary, employee_age, employee_name, id } as EmployeeType);
    }
}
