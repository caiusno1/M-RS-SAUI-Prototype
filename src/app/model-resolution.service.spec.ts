import { TestBed } from '@angular/core/testing';

import { ModelResolutionService } from './model-resolution.service';

describe('ModelResolutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelResolutionService = TestBed.get(ModelResolutionService);
    expect(service).toBeTruthy();
  });
});
