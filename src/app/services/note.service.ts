import { Injectable } from '@angular/core';

import { Note } from '../models/note.model'
import { User } from '../models/user.model'


@Injectable()
export class NoteService {
  public users: Array<User> = []
  public notes: Array<Note> = []

  constructor() {
    this.setupNotes()
  }
  
  
  setupNotes() {
    //create fake users
    this.users = [
      new User(1, "foo", "foo@gmail.com", "password1", []),
      new User(2, "bar", "bar@gmail.com", "password2", []),
      new User(3, "baz", "baz@gmail.com", "password3", []),
    ]
      
    
    
    //create fake notes
    this.notes = [
      new Note(
        1,
        "title1",
        new Date("2017-06-17T08:44:29+0100"),
        "Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque, volutpat ac tincidunt vitae, semper quis lectus. Facilisis volutpat, est velit egestas dui, id ornare arcu.",
        2,
        false,
        this.users[0]
      ),

      new Note(
        2,
        "title2",
        new Date("2017-07-17T10:44:29+0100"),
        "Amet facilisis magna etiam tempor, orci eu lobortis elementum, nibh tellus molestie nunc, non blandit massa enim nec dui nunc mattis enim ut tellus elementum! Morbi tristique senectus et netus?",
        2,
        false,
        this.users[0]
      ),

      new Note(
        3,
        "title3",
        new Date("2017-06-17T08:44:29+0100"),
        "Penatibus et magnis dis parturient. Metus, dictum at tempor commodo, ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat?",
        3,
        true,
        this.users[1]
      ),

      new Note(
        4,
        "title4",
        new Date("2018-06-17T08:44:29+0100"),
        "Congue nisi, vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras. Et netus et malesuada fames ac turpis egestas maecenas pharetra?",
        2,
        false,
        this.users[2]
      ),
    ]

    
    this.users[0].notes.push(this.notes[0]) 
    this.users[0].notes.push(this.notes[1]) 
    this.users[1].notes.push(this.notes[2]) 
    this.users[2].notes.push(this.notes[3]) 
    
  }
}
