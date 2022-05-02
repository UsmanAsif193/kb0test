import { Article } from "../general/Article";
import { MenuItem } from "../layouts/MenuItem";

export class SideBarTopic{
    
    main: MenuItem;
    subTopics: Article[]
    popularTopics: Article[]

    constructor(main: MenuItem, subTopics: Article[], popularTopics:Article[]){
        this.main = main
        this.subTopics = subTopics
        this.popularTopics = popularTopics
    }
}