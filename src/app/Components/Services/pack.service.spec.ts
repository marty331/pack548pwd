import { TestBed, inject } from '@angular/core/testing';

import { PackService } from './pack.service';

describe('PackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackService]
    });
  });

  it('should be created', inject([PackService], (service: PackService) => {
    expect(service).toBeTruthy();
  }));
});
