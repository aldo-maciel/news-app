import { Component } from '@angular/core';
import { EmployeesService } from '@/app/employees/list/employees.service';
import { onError, onSuccess } from '@/shared/error';

@Component({
    selector: 'app-employee-actions',
    templateUrl: './employee-actions.component.html'
})
export class EmployeeActionsComponent {
    employeeId: number;
    close: () => {};

    constructor(private service: EmployeesService) { }

    async onDelete() {
        const { message, status } = await this.service.delete(this.employeeId);

        const showMessage = status === 'failed' ? onError : onSuccess;

        showMessage(message);
        this.close();
    }
}
