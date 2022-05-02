import { MenuItem } from "../layouts/MenuItem";

export class GuideSidebar{
    
    main: MenuItem[];
    popular: MenuItem[]

    constructor(main: MenuItem[], popular: MenuItem[]){
        this.main = main
        this.popular = popular
    }
}