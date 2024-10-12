import { Injectable } from '@angular/core';
import { Note } from '../Models/Note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(public http: HttpClient) {}
  Notes: Note[] = [];
  addNote(note: Note) {
    return this.http.post('https://localhost:44386/api/Note/CreateNote', note, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('JWTKEY') },
    });
  }
  updateNote(note: Note) {
    return this.http.put('https://localhost:44386/api/Note/UpdateNote', note, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('JWTKEY') },
    });
  }
  getNotes() {
    return this.http.get('https://localhost:44386/api/Note/GetAllNotes', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('JWTKEY') },
    });
  }
}
