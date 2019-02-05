import { TestBed } from '@angular/core/testing';

import { AdaptationService } from './adaptation.service';

describe('AdaptationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdaptationService = TestBed.get(AdaptationService);
    expect(service).toBeTruthy();
  });
});
