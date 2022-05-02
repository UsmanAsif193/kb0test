import { MenuItem } from "../layouts/MenuItem";

export class Article{
    link:MenuItem;
    title:string;
    description: string;
    publishDate:Date;
    readingTime: number;

    constructor(link:MenuItem, title:string, description: string, publishingDate:Date, readingTime:number){
        this.link = link;
        this.title = title;
        this.description = description
        this.publishDate = publishingDate;
        this.readingTime = readingTime
    }
}