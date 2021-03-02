import {Component, OnInit} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';

@Component({
  selector: 'app-common-login-component',
  templateUrl: './common-login-component.component.html',
  styleUrls: ['./common-login-component.component.css']
})
export class CommonLoginComponentComponent extends NbLoginComponent {
}
