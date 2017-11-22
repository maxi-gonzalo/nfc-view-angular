import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';

import { ApiService } from './shared';
import { routing } from './app.routing';
import { LogoComponent } from './index/logo.component';
import { IndexComponent } from './index/index.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeModalComponent } from './employees/employee/edit-view.component';
import { ConfirmationComponent } from './employees/employee/confirmation-dialog/confirmation.component';
import { ReportsDetailAccessRejectedComponent } from './reports/reports.access.rejected.component';
import { ReportsDetailAccessEnterTodayComponent } from './reports/reports.access.enter.today.component';
import { MyFilterPipe } from '../app/employees/filter';


import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    DataTableModule,
  ],
  declarations: [
    LogoComponent,
    IndexComponent,
    EmployeesComponent,
    EmployeeModalComponent,
    ReportsDetailAccessRejectedComponent,
    ReportsDetailAccessEnterTodayComponent,
    ConfirmationComponent,
    MyFilterPipe
  ],
  providers: [
    ApiService
  ],
  bootstrap: [IndexComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
