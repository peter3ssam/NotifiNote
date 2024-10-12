export class Note {
  constructor(
    public id: number = 0,
    public title: string = '',
    public description: string = '',
    public alarm: Date = new Date()
  ) {}
}
