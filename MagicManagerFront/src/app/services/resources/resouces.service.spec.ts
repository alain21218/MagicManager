import { TestBed, inject } from '@angular/core/testing';

import { ResoucesService } from './resouces.service';

describe('ResoucesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResoucesService]
    });
  });

  it('should be created', inject([ResoucesService], (service: ResoucesService) => {
    expect(service).toBeTruthy();
  }));
});
