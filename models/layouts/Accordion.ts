import { MenuItem } from "./MenuItem"

export class Accordion {
  title: string
  menu: MenuItem[]

  constructor(title: string, menu: MenuItem[]) {
    this.title = title
    this.menu = menu
  }
}
