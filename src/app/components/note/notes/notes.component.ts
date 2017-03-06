import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../../models/note.model'

@Component({
  selector: 'my-notes',
  templateUrl: './notes.component.html' 
})

export class NotesComponent {
  @Input() notes: Array<Note>
    

  constructor() {
    
  }

  // change a note option boolean show more
  moreNote(event: MouseEvent, note: Note) {
    console.log('more')
  }

  // formulaire change for the note
  updateNote(event: MouseEvent, note: Note) {
    console.log('update')
  }

  // delete the current note
  deleteNote(event: MouseEvent, note: Note) {
    console.log('delete')
  }
  
  
  toggleReminderNote(event: MouseEvent, note: Note) {
    note.reminder = note.reminder ? false : true
  }

  incrementNote(event: MouseEvent, note: Note) {
    event.preventDefault();
    note.priority += 1 
  }

  decrementNote(event: MouseEvent, note: Note) {
    event.preventDefault();
    note.priority -= 1 
  }
  
}
