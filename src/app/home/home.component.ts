import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { FooterComponent } from './footer/footer.component';
import { AddOpenNotePanelComponent } from '../dyncamic-components/add-open-note-panel/addAopen-note/add-open-note-panel.component';
import { NotePanelService } from '../Services/note-panel.service';
import { NoteService } from '../Services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NoteComponent,
    FooterComponent,
    AddOpenNotePanelComponent,
    CommonModule
  ],
  providers: [NotePanelService,NoteService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  notePanelServ = inject(NotePanelService);
  isPanelOpen: boolean = false;
  ngOnInit(): void {
    this.notePanelServ.isPanelOpenSubj.subscribe((d) => {
      this.isPanelOpen = d;
    });
  }
}
