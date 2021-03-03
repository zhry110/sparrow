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
  NbInputModule, NbLayoutModule,
  NbMenuModule, NbSearchModule, NbUserModule,
} from '@nebular/theme';
import {NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy} from '@nebular/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonLoginComponentComponent} from './auth/common-login-component/common-login-component.component';

@NgModule({
  declarations: [SparrowComponent, CommonLoginComponentComponent],
  imports: [
    SparrowRoutingModule,
    CommonModule,
    ThemeModule,
    RouterModule,
    NbMenuModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/api/user/login',
          },
          register: {
            // ...
            endpoint: '/api/user/register',
          },
          token: {
            class: NbAuthSimpleToken,
            key: 'data',
          },
        }),
      ],
      forms: {},
    }),
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
    NbLayoutModule,
    NbCardModule],
})
export class SparrowModule {
}
