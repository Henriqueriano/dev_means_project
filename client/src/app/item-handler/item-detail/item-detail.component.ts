import { Component, Input } from "@angular/core";
@Component
(
    {
        selector: 'item-detail-component',
        standalone: true,
        templateUrl: 'item-detail.component.html',
        styleUrl: 'item-detail.component.css',
    }
)

export class ItemDetailComponent
{
    @Input() details: any = {content: 'Empty', data: '0000-00-00'};
}