import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() {
    this.items = JSON.parse(localStorage.getItem('items') || '[]' );
   }

  addToCart(product: Product) {
    this.items.push(product);
    this.syncItems()
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items= [];
    return this.items;
    this.syncItems()
  }

  syncItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
