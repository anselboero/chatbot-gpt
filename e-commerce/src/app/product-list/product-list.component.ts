import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  filterType: string = "All";
  orderBy: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  orderProducts(orderBy: string) {
    if (orderBy === 'plh') {
      this.products.sort((a, b) => a.price - b.price);
    }
    else if (orderBy === 'phl') {
      this.products.sort((a, b) => b.price - a.price);
    }
    else if (orderBy === 'az') {
      this.products.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1));
    }
    else if (orderBy === 'za') {
      this.products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
    }
  }

}
