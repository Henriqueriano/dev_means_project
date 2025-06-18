import { Injectable } from "@angular/core";
import { IItemDetailService } from "./item-detail.interface";

@Injectable()
export class ItemDetailService implements IItemDetailService 
{
    private details: object = {name:'', content: ''};
    show_detail(id: number) : void
    {
        console.log(this.details);
    }
    get_detail() : void
    {
        console.log(this.details);
    }
}