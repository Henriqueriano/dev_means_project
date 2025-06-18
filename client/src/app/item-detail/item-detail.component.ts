import { Component } from "@angular/core";
import { ItemDetailService } from "../../services/item-detail/item-detail.service";
@Component(
    {
        selector: 'item-detail-component',
        standalone: true,
        templateUrl: 'item-detail.component.html',
        styleUrl: 'item-detail.component.css',
    }
)

export class ItemDetailComponent 
{
    private _service: ItemDetailService;
    public details: object = {content: '', data: '0000-00-00'};
    constructor(public service: ItemDetailService) 
    {
        this._service = service;
    }
}