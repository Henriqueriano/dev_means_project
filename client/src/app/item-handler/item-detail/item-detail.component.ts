import { Component, OnInit, Input } from "@angular/core";
import { ItemDetailService } from "../../../services/item-detail/item-detail.service";
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
    @Input() details: any = {content: '', data: '0000-00-00'};
}