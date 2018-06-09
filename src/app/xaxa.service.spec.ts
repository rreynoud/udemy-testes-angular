import { TestBed, inject } from '@angular/core/testing';

import { XaxaService } from './xaxa.service';

describe('XaxaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XaxaService]
    });
  });

  it('should be created', inject([XaxaService], (service: XaxaService) => {
    expect(service).toBeTruthy();
  }));
});
