import { TestBed } from '@angular/core/testing';

import { YieldSimulatorService } from './yield-simulator.service';

describe('YieldSimulatorService', () => {
  let service: YieldSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YieldSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
