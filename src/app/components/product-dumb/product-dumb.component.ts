import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.scss'],
})
export class ProductDumbComponent implements OnInit {

  @Input() item_data!: Product;
  
  constructor() { 
    console.log('constructor product dumb: ', this.item_data);
   }

  ngOnInit() {
    console.log('ngoninit product dumb: ', this.item_data);
  } 
}
