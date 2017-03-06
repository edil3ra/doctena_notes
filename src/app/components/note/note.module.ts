import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { NoteComponent } from './note.component'
import { NotesComponent } from './notes/notes.component'
import { FormComponent} from './form/form.component'
import { SearchComponent } from './search/search.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    NoteComponent
  ],
  declarations: [
    NoteComponent,
    NotesComponent,
    FormComponent,
    SearchComponent
  ],

})
export class NoteModule { }
