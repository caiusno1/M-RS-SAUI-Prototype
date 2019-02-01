import { TestBed } from '@angular/core/testing';

import { AdaptiveUIModelService } from './adaptive-uimodel.service';

describe('AdaptiveUIModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdaptiveUIModelService = TestBed.get(AdaptiveUIModelService);
    expect(service).toBeTruthy();
  });
});
