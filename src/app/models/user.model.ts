import { Note } from './note.model'

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,
    public notes?: Array<Note> 
  ) {}
}
