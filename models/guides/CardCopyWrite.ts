export class CardCopyWrite {
  image: string
  imgDesc: string
  title: string
  desc: string
  link: string
  constructor(image: string, imgDesc: string, title: string, desc: string, link: string) {
    this.image = image
    this.title = title
    this.imgDesc = imgDesc
    this.link = link
    this.desc = desc
  }
}
