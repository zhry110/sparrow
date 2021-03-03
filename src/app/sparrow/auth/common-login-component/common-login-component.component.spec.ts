import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonLoginComponentComponent} from './common-login-component.component';

describe('CommonLoginComponentComponent', () => {
  let component: CommonLoginComponentComponent;
  let fixture: ComponentFixture<CommonLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonLoginComponentComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
