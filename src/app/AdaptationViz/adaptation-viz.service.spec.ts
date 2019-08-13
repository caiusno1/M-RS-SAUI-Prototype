import { TestBed } from '@angular/core/testing';

import { AdaptationVizService } from './adaptation-viz.service';

describe('AdaptationVizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdaptationVizService = TestBed.get(AdaptationVizService);
    expect(service).toBeTruthy();
  });
});
