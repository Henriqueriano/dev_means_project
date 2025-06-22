import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output, OnInit } from "@angular/core";
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
export class TodoItensComponent implements OnInit
{
    @Output() children_details = new EventEmitter<object>();
    private readonly http: HttpClient;
    public itens: any = [{id: 1, title: 'batata', content: 'banana', author: 'banana'}];

    constructor(public _http: HttpClient) 
    {
        this.http = _http;
    }

    ngOnInit() 
    {
        this.http.get("http://localhost:5174/todo/gettodoitens").subscribe(
            {
                next: (data) => 
                    {
                        this.itens = data;
                    }
            });
    }

    show_detail(data: object): void 
    {
        this.children_details.emit(data);
    }
}