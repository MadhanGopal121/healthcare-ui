import { TestBed } from '@angular/core/testing';

import { Settingsservice } from './settingsservice';

describe('Settingsservice', () => {
  let service: Settingsservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Settingsservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
