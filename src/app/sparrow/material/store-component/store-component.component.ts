import {Component, Input, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {StoreInfoInputDialogComponent} from '../store-info-input-dialog/store-info-input-dialog.component';

@Component({
  selector: 'ngx-store-component',
  templateUrl: './store-component.component.html',
  styleUrls: ['./store-component.component.scss'],
})
export class StoreComponentComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  @Input() address: string;
  @Input() operation: boolean;

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }

  newStore() {
    this.dialogService.open(StoreInfoInputDialogComponent)
      .onClose.subscribe(storeInfo => storeInfo && console.log(storeInfo));
  }

  openStore() {
  }

  op() {
    if (this.operation) {
      this.newStore();
    } else {
      this.openStore();
    }
  }
}
