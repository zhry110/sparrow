import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {CommonLoginComponentComponent} from './sparrow/auth/common-login-component/common-login-component.component';
import {SparrowAuthComponent} from './sparrow/sparrow-auth-component';

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
    path: 'abc',
    component: CommonLoginComponentComponent,
  },
  {
    path: 'auth',
    component: SparrowAuthComponent,
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
        component: NbLogoutComponent,
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
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages'},
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
