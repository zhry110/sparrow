import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInfoInputDialogComponent } from './store-info-input-dialog.component';

describe('StoreInfoInputDialogComponent', () => {
  let component: StoreInfoInputDialogComponent;
  let fixture: ComponentFixture<StoreInfoInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreInfoInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInfoInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
