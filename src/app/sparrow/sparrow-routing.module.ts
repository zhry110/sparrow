import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SparrowComponent} from './sparrow.component';
import {CommonLoginComponentComponent} from './auth/common-login-component/common-login-component.component';

const routes: Routes = [{
  path: '',
  component: SparrowComponent,
  children: [
    {
      path: 'login',
      component: CommonLoginComponentComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SparrowRoutingModule {
}
