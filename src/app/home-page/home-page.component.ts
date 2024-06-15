import { Component } from '@angular/core';
import { MenuItemsComponent } from '../components/menu-items/menu-items.component';
import { CommonModule } from '@angular/common';
import { ItemComponentComponent } from '../components/item-component/item-component.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [MenuItemsComponent, CommonModule, ItemComponentComponent],
})
export class HomePageComponent {
  constructor() {}

  ngOnInit() {}

  tela1 = false;
}
