import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { HeaderComponent } from './header/header.component';
import { TodoItensComponent } from './todo-itens/todo-itens.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OptionsComponent,
            HeaderComponent, TodoItensComponent,
            ItemDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'I/O';
}
