import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy} from "@nebular/auth";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
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
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
