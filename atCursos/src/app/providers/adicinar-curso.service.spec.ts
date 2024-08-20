import { TestBed } from '@angular/core/testing';

import { AdicinarCursoService } from './adicinar-curso.service';

describe('AdicinarCursoService', () => {
  let service: AdicinarCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicinarCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
