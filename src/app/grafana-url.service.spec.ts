import { TestBed } from '@angular/core/testing';

import { GrafanaURLService } from './grafana-url.service';

describe('GrafanaURLService', () => {
  let service: GrafanaURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafanaURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
