import { Component } from "@angular/core";
@Component(
    {
        selector: 'options-component',
        templateUrl: 'options.component.html',
        styleUrl: 'options.component.css',
        standalone: true
    })
export class OptionsComponent 
{
    public itens = [
        {userPermission:false,content:'B',link:'https://www.bing.com/search?pglt=427&q=for+angular&cvid=24e31eb9c6634e60821fbefe1e2509bf&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDEzNTlqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531'},
        {userPermission:false,content:'a',link:''},
        {userPermission:false,content:'N',link:''},
        {userPermission:false,content:'a',link:''},
        {userPermission:false,content:'N',link:''},
        {userPermission:false,content:'a',link:''}
    ]

    public foo(): any 
    {
        console.log('Foo!');
    } 
}