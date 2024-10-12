import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

interface Item {
  Category: string;
  Qty: number;
  Price: number;
}

// Define an interface for the overall response
export interface ResponseData {
  [key: string]: Item;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);

  getAll(
    country: string = 'any',
    aperator: string = 'any'
  ): Observable<ResponseData> {
    return this.httpClient.get<ResponseData>(
      `https://5sim.net/v1/guest/products/${country}/${aperator}`
    );
  }
}
