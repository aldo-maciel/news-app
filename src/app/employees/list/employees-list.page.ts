import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { EmployeeType } from '@/app/employees/list/employee-type';
import { EmployeesService } from '@/app/employees/list/employees.service';
import { onError } from '@/shared/error';
import { EmployeesDetailPage } from '@/app/employees/list/detail/employees-detail.page';
import { EmployeeFormComponent } from '@/app/employees/list/detail/actions/employee-form.component';

@Component({
    selector: 'app-list-employees',
    templateUrl: 'employees-list.page.html',
    styleUrls: [ 'employees-list.page.scss' ]
})
export class EmployeesListPage implements OnInit {
    employees: EmployeeType[] = [];

    constructor(private service: EmployeesService,
                private navCtrl: IonNav,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.getData();
    }

    async getData() {
        try {
            const { data } = await this.service.getEmployees();
            this.employees = data;
        } catch (error) {
            onError(error.message);
        }
    }

    goToDetail(employee: EmployeeType) {
        this.navCtrl.push(EmployeesDetailPage, { employee });
    }

    async create() {
        const self = this;
        const modal = await this.modalController.create({
            component: EmployeeFormComponent,
            componentProps: {
                close(employee: EmployeeType) {
                    console.log(employee);
                    self.employees.push(employee);
                    modal.dismiss();
                }
            }
        });
        return await modal.present();
    }

}
