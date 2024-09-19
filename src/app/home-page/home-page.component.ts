import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [CommonModule],
})
export class HomePageComponent {
  listBackendLanguages: any = [];
  listFrontendLanguages: any = [];
  listFrameworks: any = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getBackLanguages();
    this.getFrontLanguages();
    this.getFrameworks();
  }

  getBackLanguages() {
    this.productService.getAllBackEnd().subscribe((data) => {
      this.listBackendLanguages = data;
    });
  }

  getFrontLanguages() {
    this.productService.getAllFrontEnd().subscribe((data) => {
      this.listFrontendLanguages = data;
    });
  }

  getFrameworks() {
    this.productService.getAllFrameworks().subscribe((data) => {
      this.listFrameworks = data;
    });
  }
}
