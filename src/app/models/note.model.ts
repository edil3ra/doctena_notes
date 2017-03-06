import { User } from './user.model'

export class Note {
  constructor(
    public id: number,
    public title: string,
    public date: Date,
    public description: string,
    public priority: number,
    public reminder: boolean,
    public user?: User
  ) {}
}
