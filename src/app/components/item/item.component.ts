import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})

export class ItemComponent implements OnInit {

  fallbackImage = 'assets/imgs/1.jpg';
  @Input() item: Item;
  @Input() index;
  @Output() add: EventEmitter<Item> = new EventEmitter();
  @Output() minus: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onImgError(event) {
    event.target.src = this.fallbackImage;
  }

  quantityPlus() {
    this.add.emit(this.item);
  }

  quantityMinus() {
    this.minus.emit(this.item);
  }

}
