import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldResultCardComponent } from './yield-result-card.component';

describe('YieldResultCardComponent', () => {
  let component: YieldResultCardComponent;
  let fixture: ComponentFixture<YieldResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YieldResultCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YieldResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
