export default class Event {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public description: string,
    public location: string,
    public date: string,
    public time: string,
    public organizer: string
  ) { }
}