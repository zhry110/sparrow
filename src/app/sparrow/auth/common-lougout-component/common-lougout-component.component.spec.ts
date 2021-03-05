import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLougoutComponentComponent } from './common-lougout-component.component';

describe('CommonLougoutComponentComponent', () => {
  let component: CommonLougoutComponentComponent;
  let fixture: ComponentFixture<CommonLougoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLougoutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLougoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
