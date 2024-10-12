import { Component, OnInit, inject } from '@angular/core';
import { Note } from '../../Models/Note.model';
import { NoteService } from '../../Services/note.service';
import { CommonModule } from '@angular/common';
import { NotePanelService } from '../../Services/note-panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent implements OnInit {
  noteServ: NoteService = inject(NoteService);
  router: Router = inject(Router);
  notes: null | Note[] = null;
  addNote() {
    // this.notes?.push(new Note(0, 'title'));
    this.notePanelServ.changePanelStatues();
    this.notePanelServ.addPanelData();
    this.notePanelServ.isAddPanel = true;
  }
  openNote(note: Note) {
    this.notePanelServ.changePanelStatues();
    this.notePanelServ.addPanelData(note);
    this.notePanelServ.isAddPanel = false;
  }
  ngOnInit(): void {
    if(!localStorage.getItem("JWTKEY")){
      this.router.navigate(["account"])
    }
    this.notes = this.noteServ.Notes;
    this.noteServ.getNotes().subscribe((d: any) => {
      this.notes = d;
    });
  }

  notePanelServ = inject(NotePanelService);
}
