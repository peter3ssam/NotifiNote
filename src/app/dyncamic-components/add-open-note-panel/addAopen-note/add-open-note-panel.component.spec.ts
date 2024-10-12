import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpenNotePanelComponent } from './add-open-note-panel.component';

describe('AddOpenNotePanelComponent', () => {
  let component: AddOpenNotePanelComponent;
  let fixture: ComponentFixture<AddOpenNotePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOpenNotePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOpenNotePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
