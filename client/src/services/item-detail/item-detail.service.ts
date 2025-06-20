import { Injectable } from "@angular/core";
import { IItemDetailService } from "./item-detail.interface";

@Injectable()
export class ItemDetailService implements IItemDetailService 
{
    private details: object = {name:'', content: 'Ababa'};
    show_detail(id: number) : void
    {
        this.details = {name:'Batata', content:'Aba'};
        console.log(this.details);
    }
    get_detail() : object
    {
        return this.details;
    }
}