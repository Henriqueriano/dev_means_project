import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { config } from "../../../../package.json";
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
    private readonly BASE_URL: string = config.apiBase;
    public itens: any = [];
    constructor(public _http: HttpClient) { this.http = _http; }
    ngOnInit() : void
    {
        this.http.get(`${this.BASE_URL}/todo/gettodoitens`)
        .subscribe({ next: (data) => { this.itens = data; } });
    }
    show_detail(data: object): void {
        this.children_details.emit(data);
    }
}