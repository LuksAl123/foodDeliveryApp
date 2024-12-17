import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.scss'],
})
export class ProductDumbComponent implements OnInit {

  @Input() item_data: any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.item_data);
  } 
}
