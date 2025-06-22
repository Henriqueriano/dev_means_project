import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
    public itens: any = [{userPermission: false, content:'peidan', link:'Ababa'}];
    constructor ( public _http: HttpClient) { this.http = _http; }
    
    ngOnInit() 
    {
        this.http.get("http://localhost:5174/option/getoptions").subscribe(
            {
                next: (data) => 
                    {
                        this.itens = data;
                    }
            })
    }
}