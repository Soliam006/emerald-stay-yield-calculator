import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldCalculatorComponent } from './yield-calculator.component';

describe('YieldCalculatorComponent', () => {
  let component: YieldCalculatorComponent;
  let fixture: ComponentFixture<YieldCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YieldCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YieldCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
