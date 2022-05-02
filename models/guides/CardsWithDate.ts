export class CardsWithDate {
  title: string
  image: string
  date: string
  link: string
  time: string

  constructor(image: string, title: string, date: string, time: string, link: string) {
    this.image = image
    this.title = title
    this.date = date
    this.link = link
    this.time = time
  }
}
