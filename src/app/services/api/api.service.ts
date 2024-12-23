import { Injectable } from '@angular/core';
// import { Product } from 'src/app/interfaces/product.interface';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // items: Product[] = [
  //   // { id: 1, name: 'Product1', price: 50 },
  //   // { id: 2, name: 'Product2', price: 40 },
  //   new Product(1, 'Product1', 50),
  //   new Product(2, 'Product2', 40),
  // ];

  items: Product[] = [
    { id: 1, name: 'Product1', price: 50 },
    { id: 2, name: 'Product2', price: 40 },
  ];
  
  constructor() { 
    // const item = new Product(3, 'Product 3', 30);
    // console.log(item);
    // this.items = this.items.concat(item);
    // console.log('items: ', this.items);
  }

  getItems() {
    return this.items;
  }

  getTotal(): Promise<number> {
    return new Promise((resolve, reject) => {
      if(this.items.length == 0) reject('no items available');

      let total = 0;
      this.items.forEach(item => {
        console.log(item);

        total += item?.price;
      });
      resolve(total);
    });
  }

  getSuccessResponse(total: number): Promise<string> {
    return new Promise((resolve, reject) => {
      if(total > 50) resolve('success');
      else reject('failure');
    });
  }
}
