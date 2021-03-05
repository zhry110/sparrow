import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {StoreInfo} from '../../model/store-info';

@Component({
  selector: 'ngx-store-info-input-dialog',
  templateUrl: './store-info-input-dialog.component.html',
  styleUrls: ['./store-info-input-dialog.component.scss'],
})
export class StoreInfoInputDialogComponent implements OnInit {

  constructor(protected ref: NbDialogRef<StoreInfoInputDialogComponent>) {
  }

  ngOnInit(): void {
  }

  submit(name: string, address: string) {
    this.ref.close(new StoreInfo(name, address));
  }

  cancel() {
    this.ref.close();
  }
}
