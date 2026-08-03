import { TestBed } from '@angular/core/testing';

import { OutreachData } from './outreach-data';

describe('OutreachData', () => {
  let service: OutreachData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutreachData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
