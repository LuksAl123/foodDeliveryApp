import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams;
    console.log(data);
    if(data['data']) {
      const result = JSON.parse(data['data']);
      console.log(result);
    }
  }
}
