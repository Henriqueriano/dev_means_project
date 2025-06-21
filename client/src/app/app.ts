import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { HeaderComponent } from './header/header.component';
import { ItemHandlerComponent } from './item-handler/item-handler.component';

@Component
(
  {
  selector: 'app-root',
  imports: [RouterOutlet, OptionsComponent,
            HeaderComponent, ItemHandlerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
  }
)
export class App 
{
  protected title: string = 'I/O';
}
