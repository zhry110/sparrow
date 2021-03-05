import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SparrowComponent} from './sparrow.component';
import {StoreManagementComponentComponent} from './material/store-management-component/store-management-component.component';

const routes: Routes = [{
  path: '',
  component: SparrowComponent,
  children: [
    {
      path: '',
      redirectTo: 'store',
      pathMatch: 'full',
    },
    {
      path: 'store',
      component: StoreManagementComponentComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SparrowRoutingModule {
}
