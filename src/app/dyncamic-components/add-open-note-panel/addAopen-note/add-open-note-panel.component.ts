import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotePanelService } from '../../../Services/note-panel.service';
import { Note } from '../../../Models/Note.model';
import { NoteService } from '../../../Services/note.service';

@Component({
  selector: 'app-add-open-note-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-open-note-panel.component.html',
  styleUrl: './add-open-note-panel.component.css',
})
export class AddOpenNotePanelComponent implements OnInit {
  ngOnInit(): void {
    this.notePanelServ.panelDataSubj.subscribe((d) => {
      this.panelData = d;
    });
  }
  panelData: Note | null = null;
  notePanelServ = inject(NotePanelService);
  noteServ = inject(NoteService);
  submit(data: Note) {
    if (this.notePanelServ.isAddPanel) {
      if (!this.noteServ.Notes) this.noteServ.Notes = [data];
      else this.noteServ.Notes.push(data);
      this.noteServ.addNote(data).subscribe((d) => {});
    } else {
      console.log(data.id);
      if (this.panelData)
        this.noteServ.updateNote(this.panelData).subscribe(() => {});
    }
  }
  close() {
    this.panelData = null;
    this.notePanelServ.changePanelStatues();
    this.notePanelServ.isAddPanel = null;
  }
}
