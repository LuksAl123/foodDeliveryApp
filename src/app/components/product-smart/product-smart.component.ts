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
  private apiService = inject(ApiService);

  constructor() { }

  ngOnInit() {
    this.items = this.apiService.getItems();
  }
}
