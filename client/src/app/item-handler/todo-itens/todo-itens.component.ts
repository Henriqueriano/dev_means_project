import { Component, EventEmitter, Output } from "@angular/core";
import { ItemDetailService } from "../../../services/item-detail/item-detail.service";
import { ItemDetailComponent } from "../item-detail/item-detail.component";
@Component
(
    {
        selector: 'todo-itens-component',
        standalone: true,
        templateUrl: 'todo-itens.component.html',
        styleUrl: 'todo-itens.component.css',
        imports: [],
    }
)
export class TodoItensComponent 
{
    private readonly _service : ItemDetailService;
    @Output() children_details = new EventEmitter<object>();
    public item = 
    [
        {id:1,title:'Item 1',content:'Banana!',author:''},
        {id:2,title:'Item 2',content:'Cereja!',author:''},
        {id:3,title:'Item 3',content:'Uva!',author:''},
        {id:4,title:'Item 4',content:'Laranja!',author:''},
        {id:5,title:'Item 5',content:'Mexerica!',author:''}
    ];
    constructor(public service: ItemDetailService) 
    {
        this._service = service;
    }
    show_detail(data: object): void 
    {
        this.children_details.emit(data);
        console.log("foo");
    }
}