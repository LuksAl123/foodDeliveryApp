import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getItems() {
    const items = [
      { id: 1, name: 'Product1', price: 50 },
      { id: 2, name: 'Product2', price: 40 },
    ];

    return items;
  }
}
