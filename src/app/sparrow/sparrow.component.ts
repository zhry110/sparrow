import {Component, OnInit} from '@angular/core';
import {MENU_ITEMS} from './sparrow-menu';

@Component({
  selector: 'ngx-sparrow',
  templateUrl: './sparrow.component.html',
  styleUrls: ['./sparrow.component.scss'],
})
export class SparrowComponent implements OnInit {
  menu: any = MENU_ITEMS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
