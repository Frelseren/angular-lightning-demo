import { TestBed, inject } from '@angular/core/testing';

import { ApexService } from './apex.service';

describe('ApexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApexService]
    });
  });

  it('should be created', inject([ApexService], (service: ApexService) => {
    expect(service).toBeTruthy();
  }));
});
