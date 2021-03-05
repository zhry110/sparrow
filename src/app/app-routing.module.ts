import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  NbAuthComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {CommonLoginComponentComponent} from './sparrow/auth/common-login-component/common-login-component.component';
import {CommonLougoutComponentComponent} from './sparrow/auth/common-lougout-component/common-lougout-component.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'sparrow',
    loadChildren: () => import('./sparrow/sparrow.module')
      .then(m => m.SparrowModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: CommonLoginComponentComponent,
      },
      {
        path: 'login',
        component: CommonLoginComponentComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: CommonLougoutComponentComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {path: '', redirectTo: 'sparrow', pathMatch: 'full'},
  {path: '**', redirectTo: 'sparrow'},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
