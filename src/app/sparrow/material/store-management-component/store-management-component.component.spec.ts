import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManagementComponentComponent } from './store-management-component.component';

describe('StoreManagementComponentComponent', () => {
  let component: StoreManagementComponentComponent;
  let fixture: ComponentFixture<StoreManagementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreManagementComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
