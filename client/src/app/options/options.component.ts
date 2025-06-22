import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component
(
    {
        selector: 'options-component',
        templateUrl: 'options.component.html',
        styleUrl: 'options.component.css',
        standalone: true
    }
)
export class OptionsComponent implements OnInit
{
    private readonly http: HttpClient;
    public itens: any;
    constructor ( public _http: HttpClient) { this.http = _http; }
    ngOnInit() 
    {
        this.http.get('http://localhost:5174/option/getoptions')
        .subscribe(res => { this.itens = res; });
    }
}