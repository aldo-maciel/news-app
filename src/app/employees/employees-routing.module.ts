import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesPage } from '@/app/employees/employees.page';

const routes: Routes = [
    {
        path: '',
        component: EmployeesPage
    }
];

@NgModule({
    imports: [ HttpClientModule, RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ HttpClientModule ]
})
export class EmployeesPageRoutingModule {
}
