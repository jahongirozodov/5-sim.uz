import { Component, inject, OnChanges } from '@angular/core';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';
import { CommonModule, NgClass } from '@angular/common';
import {
  ProductService,
  ResponseData,
} from '../../../../shared/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [SearchInputComponent, CommonModule, FormsModule],
  templateUrl: './select-country.component.html',
  styleUrl: './select-country.component.scss',
})
export class SelectCountryComponent {
  products: ResponseData | null = null;
  sortedProducts: ResponseData | null = null;
  items = [0, 1, 2, 3, 4, 5, 6, 10];
  selectedItem: string | null = null;
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (res) => {
        this.products = res;
        this.sortedProducts = res;
      },
    });
  }

  search(term: string) {
    if (!this.products) return;
      const searchLower = term.toLowerCase();
      this.sortedProducts = Object.entries(this.products)
        .filter(([key]) => key.toLowerCase().includes(searchLower)) // Faqat kalitlarni qidiramiz
        .reduce((acc, [key, value]) => {
          acc[key] = value; // Qaytgan kalitlarni yangi obyektga qo'shamiz
          return acc;
        }, {} as ResponseData); // Yangi obyekt
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }

  clearItem() {
    this.selectedItem = null;
    this.sortedProducts = this.products
  }
}
