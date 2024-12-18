import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.scss'],
})
export class ProductDumbComponent implements OnInit {

  @Input() item_data: any;
  
  constructor() { 
    console.log('constructor product dumb: ', this.item_data);
   }

  ngOnInit() {
    console.log('ngoninit product dumb: ', this.item_data);
  } 
}
