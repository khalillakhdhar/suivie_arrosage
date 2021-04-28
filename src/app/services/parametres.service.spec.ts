import { TestBed } from '@angular/core/testing';

import { ParametresService } from './parametres.service';

describe('ParametresService', () => {
  let service: ParametresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
