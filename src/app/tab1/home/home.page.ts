import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  items: any[] = [];
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  constructor() { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams;
    console.log(data);
    if(data['data']) {
      const result = JSON.parse(data['data']);
      console.log(result);
    }
    
    this.items = this.apiService.getItems();
  }

  ngOnDestroy() {
    console.log('home ngOnDestroy');
  }

}
