import { Component } from "@angular/core";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { TodoItensComponent } from "./todo-itens/todo-itens.component";
@Component(
    {
        selector: 'item-handler-component',
        templateUrl: 'item-handler.component.html',
        standalone: true,
        imports: [ItemDetailComponent, TodoItensComponent]
    })
export class ItemHandlerComponent 
{
    public details: object = {nome:'', content: 'Empty'};
    set_detail(data: any) 
    {
        console.log(data);
        this.details = data;
    }
}