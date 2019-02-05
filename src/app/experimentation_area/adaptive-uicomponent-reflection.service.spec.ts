import { TestBed } from '@angular/core/testing';

import { AdaptiveUIComponentReflectionService } from './adaptive-uicomponent-reflection.service';

describe('AdaptiveUIComponentReflectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdaptiveUIComponentReflectionService = TestBed.get(AdaptiveUIComponentReflectionService);
    expect(service).toBeTruthy();
  });
});
