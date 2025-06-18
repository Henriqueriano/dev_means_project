import { Component, inject, Inject } from "@angular/core";
import { ItemDetailService } from "../../services/item-detail/item-detail.service";
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
    public item = 
    [
        {id:1,title:'foo',content:'Cereja!',author:''},
        {id:2,title:'foo',content:'Cereja!',author:''},
        {id:3,title:'foo',content:'Cereja!',author:''},
        {id:4,title:'foo',content:'Cereja!',author:''},
        {id:5,title:'foo',content:'Cereja!',author:''}
    ];
    constructor(public service: ItemDetailService) 
    {
        this._service = service;
    }
    
    show_detail(id: number): void 
    {
        this._service.show_detail(id)
    }
}