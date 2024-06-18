import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  @Output() toggle = new EventEmitter<void>();

  listProducts: any = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  onToggle() {
    this.toggle.emit();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.listProducts = data;
      console.log(this.listProducts);
    });
  }
}
