import { TestBed } from '@angular/core/testing';

import { ContextChangeService } from './context-change.service';

describe('ContextChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContextChangeService = TestBed.get(ContextChangeService);
    expect(service).toBeTruthy();
  });
});
