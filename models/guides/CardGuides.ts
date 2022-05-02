export class CardGuides {
  title?: string
  subtitle?: string
  image?: string
  imgDesc?: string
  date?: string
  link?: string
  time?: string
  desc?: string

  constructor(
    image?: string,
    imgDesc?: string,
    title?: string,
    subtitle?: string,

    date?: string,

    time?: string,
    desc?: string,
    link?: string
  ) {
    this.image = image
    this.title = title
    this.date = date
    this.link = link
    this.time = time
    this.subtitle = subtitle
    this.desc = desc
    this.imgDesc = imgDesc
  }
}
