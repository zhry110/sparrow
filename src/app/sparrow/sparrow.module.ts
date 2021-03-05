import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SparrowComponent} from './sparrow.component';
import {ThemeModule} from '../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {SparrowRoutingModule} from './sparrow-routing.module';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule, NbSearchModule, NbUserModule,
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonLoginComponentComponent} from './auth/common-login-component/common-login-component.component';
import {CommonLougoutComponentComponent} from './auth/common-lougout-component/common-lougout-component.component';
import {StoreManagementComponentComponent} from './material/store-management-component/store-management-component.component';
import {DashboardModule} from "../pages/dashboard/dashboard.module";
import { StoreComponentComponent } from './material/store-component/store-component.component';
import { StoreInfoInputDialogComponent } from './material/store-info-input-dialog/store-info-input-dialog.component';


@NgModule({
  declarations: [SparrowComponent,
    CommonLoginComponentComponent,
    CommonLougoutComponentComponent,
    StoreManagementComponentComponent,
    StoreComponentComponent,
    StoreInfoInputDialogComponent],
  imports: [
    SparrowRoutingModule,
    CommonModule,
    ThemeModule,
    RouterModule,
    NbMenuModule,
    NbAlertModule,
    NbIconModule,
    NbCheckboxModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    DashboardModule,
    NbCardModule,
  ],
})
export class SparrowModule {
}
