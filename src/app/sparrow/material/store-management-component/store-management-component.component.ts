import {Component, OnInit} from '@angular/core';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  address: string;
  operation: boolean;
}

@Component({
  selector: 'ngx-store-management-component',
  templateUrl: './store-management-component.component.html',
  styleUrls: ['./store-management-component.component.scss'],
})
export class StoreManagementComponentComponent implements OnInit {
  lightCard: CardSettings = {
    title: '新建仓库',
    iconClass: 'nb-roller-shades',
    type: 'success',
    address: '',
    operation: true,
  };
  coffeeMakerCard: CardSettings = {
    title: '仓库11',
    iconClass: 'nb-roller-shades',
    type: 'warning',
    address: '中国兰州',
    operation: false,
  };
  lists: CardSettings[] = [
    this.lightCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
    this.coffeeMakerCard,
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
