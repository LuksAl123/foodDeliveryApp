import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  items: any[] = [
    { id: 1, name: 'Product1', price: 50 },
    { id: 2, name: 'Product2', price: 40 },
  ];
  
  constructor() { }

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
