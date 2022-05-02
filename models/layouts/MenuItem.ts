export class MenuItem {
  link: string;
  title: string;
  icon: string;

  constructor(title: string, link: string, icon = "") {
    this.link = link;
    this.title = title;
    this.icon = icon;
  }
}
