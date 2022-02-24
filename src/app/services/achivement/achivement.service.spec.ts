import { TestBed } from '@angular/core/testing';

import { AchivementService } from './achivement.service';

describe('AchivementService', () => {
  let service: AchivementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchivementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
