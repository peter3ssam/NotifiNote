import { TestBed } from '@angular/core/testing';

import { NotePanelService } from './note-panel.service';

describe('NotePanelService', () => {
  let service: NotePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
