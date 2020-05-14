import { Component } from '@angular/core';
import { EmployeeType } from '@/app/employees/list/employee-type';
import { IonNav, ModalController, PopoverController } from '@ionic/angular';
import { EmployeesService } from '@/app/employees/list/employees.service';
import { EmployeeActionsComponent } from '@/app/employees/list/detail/actions/employee-actions.component';
import { EmployeeFormComponent } from '@/app/employees/list/detail/actions/employee-form.component';

@Component({
    selector: 'app-employees',
    templateUrl: 'employee-detail.page.html'
})
export class EmployeesDetailPage {
    employee: EmployeeType = {} as EmployeeType;

    constructor(private service: EmployeesService,
                private navCtrl: IonNav,
                public popoverController: PopoverController,
                public modalController: ModalController) { }

    goToEmployees() {
        this.navCtrl.pop();
    }

    async presentPopover(ev: MouseEvent) {
        const popover = await this.popoverController.create({
            component: EmployeeActionsComponent,
            event: ev,
            animated: true,
            showBackdrop: true,
            componentProps: {
                employeeId: this.employee.id,
                close() {
                    popover.dismiss();
                }
            }
        });
        return await popover.present();
    }

    async onEdit() {
        const modal = await this.modalController.create({
            component: EmployeeFormComponent,
            componentProps: {
                employee: this.employee,
                close(employee: EmployeeType) {
                    this.employee = employee;
                    modal.dismiss();
                }
            }
        });
        return await modal.present();
    }

}
