import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { NoteModule } from './note/note.module'
import { ServicesModule } from '../services/services.module'

@NgModule({
  imports: [
    BrowserModule,
    NoteModule,
    ServicesModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
