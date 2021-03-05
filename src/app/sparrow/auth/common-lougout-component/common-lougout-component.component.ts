import {Component, OnInit} from '@angular/core';
import {NbAuthService, NbTokenService} from '@nebular/auth';

@Component({
  selector: 'ngx-common-lougout-component',
  templateUrl: './common-lougout-component.component.html',
  styleUrls: ['./common-lougout-component.component.scss'],
})
export class CommonLougoutComponentComponent implements OnInit {
  constructor(private authService: NbAuthService,
              private tokenService: NbTokenService) {
  }

  ngOnInit(): void {
    this.tokenService.clear();
  }

}
