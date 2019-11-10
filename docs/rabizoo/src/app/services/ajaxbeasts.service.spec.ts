import { TestBed } from '@angular/core/testing';

import { AjaxbeastsService } from './ajaxbeasts.service';

describe('AjaxbeastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxbeastsService = TestBed.get(AjaxbeastsService);
    expect(service).toBeTruthy();
  });
});
