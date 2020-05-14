import { ServiceFacade } from '@/shared/service/facade.service';
import { Injectable } from '@angular/core';
import { EmployeeType } from '@/app/employees/list/employee-type';

@Injectable({ providedIn: 'any' })
export class EmployeesService extends ServiceFacade {

    protected getUrl(route: string) {
        const base = 'http://dummy.restapiexample.com/api/v1';
        return `${ base }/${ route }`;
    }

    getEmployees() {
        return this.doGet<{ data: EmployeeType[] }>('employees');
    }

    create(employee: { name: string, salary: string, age: string }) {
        return this.doPost<{ data: { name: string, salary: string, age: string, id: number }, status: string }>('create', employee);
    }

    update(id: number, employee: EmployeeType) {
        return this.doPut<{ data: EmployeeType, status: string, message: string }>(`update/${ id }`, employee);
    }

    delete(id: number) {
        return this.doDelete<{ message: string, status: string }>(`delete/${ id }`);
    }
}
