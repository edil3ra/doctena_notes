import { Component } from '@angular/core';
import { Note } from '../../models/note.model'
import { NoteService } from '../../services/note.service'

@Component({
  selector: 'my-note',
  templateUrl: './note.component.html'

})
export class NoteComponent {
  notes: Array<Note>
  showForm: boolean = true
  showSearch: boolean = true


  constructor(noteService: NoteService) {
    this.notes = noteService.notes
  }


}
