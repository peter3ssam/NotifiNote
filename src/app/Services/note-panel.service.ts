import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../Models/Note.model';

@Injectable({
  providedIn: 'root',
})
export class NotePanelService {
  constructor() {}
  isPanelOpen: boolean = false;
  isAddPanel: boolean | null = null;

  isPanelOpenSubj: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isPanelOpen
  );
  panelData: Note = new Note(0, '', '');
  panelDataSubj: BehaviorSubject<Note> = new BehaviorSubject(this.panelData);
  addPanelData(note: Note = new Note()) {
    this.panelDataSubj.next(note);
  }
  changePanelStatues() {
    this.isPanelOpen = !this.isPanelOpen;
    this.isPanelOpenSubj.next(this.isPanelOpen);
  }
}
