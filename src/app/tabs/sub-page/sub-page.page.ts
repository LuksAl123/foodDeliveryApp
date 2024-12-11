import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.page.html',
  styleUrls: ['./sub-page.page.scss'],
})
export class SubPagePage implements OnInit {

  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    console.log('ngoninit subpage');
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    const data = this.route.snapshot.queryParams;
    console.log(data);
  }
}
