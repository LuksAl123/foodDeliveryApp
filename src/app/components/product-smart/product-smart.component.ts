import { Component, inject, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product-smart',
  templateUrl: './product-smart.component.html',
  styleUrls: ['./product-smart.component.scss'],
})
export class ProductSmartComponent  implements OnInit {

  @Input() isHome: boolean = true;
  items: any[] = [];
  total = 0;
  private apiService = inject(ApiService);

  constructor() { 
    console.log('constructor isHome: ', this.isHome);
    // this.items = this.apiService.getItems();
    // console.log('constructor items: ', this.items);
    // const item = this.items.filter((data) => data?.price > 40);
    // console.log('constructor item: ', item);
   }

  ngOnInit() {
    console.log('ngoninit isHome: ', this.isHome);
    this.items = this.apiService.getItems();
    console.log('ngoninit items: ', this.items);
    if(!this.isHome) this.getTotal1();

    const item = { id: 1, name: 'Coding Technyks' };
    const item1 = { ...item, name: 'Nikhil', desig: 'instructor', ...this.items[0] };
    console.log(item1);

    const array1 = [1, 2, 3, 4];
    const array2 = [1, 5, 6, 7];
    const array3 = [...array1, ...array2, 0, 9, 1];
    console.log(array3);
  }

  getTotal(){
    this.apiService.getTotal()
    .then((result: number) => {
      this.total = result;
      console.log(this.total);
      this.apiService.getSuccessResponse(this.total)
      .then((successResult: string) => {
        console.log(successResult);
      })
      .catch((failure: string) => {
        console.log(failure);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async getTotal1(){
    try {
      this.total = await this.apiService.getTotal();
      console.log(this.total);
      const success = await this.apiService.getSuccessResponse(this.total);
      console.log(success);
    } catch(e) {
      console.log(e);
    }
  }
}
