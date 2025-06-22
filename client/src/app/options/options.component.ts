import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { config }  from "../../../package.json";
@Component
(
    {
        selector: 'options-component',
        templateUrl: 'options.component.html',
        styleUrl: 'options.component.css',
        standalone: true,
    }
)
export class OptionsComponent implements OnInit
{
    private readonly http: HttpClient;
    private readonly BASE_URL: string = config.apiBase;
    public itens: any = [];
    constructor ( public _http: HttpClient) { this.http = _http; }
    ngOnInit() : void 
    {
        this.http.get(`${this.BASE_URL}/option/getoptions`)
        .subscribe({ next: (data) => { this.itens = data; } });
    }
}