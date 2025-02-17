import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };
  isLoading: boolean;
  query: any;
  restaurants: Restaurant[] = [];

  startAt = new Subject();
  endAt = new Subject();

  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  querySub: Subscription;

  constructor(
    private api: ApiService,
    public global: GlobalService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
    this.querySub = combineLatest(this.startObs, this.endObs).subscribe(val => {
      console.log(val);
      this.queryResults();
    });
  }

  async queryResults(start, end) {
    try {
      this.isLoading = true;
      this.restaurants = await this.api.getNearbySearchedRestaurants();
    } catch(e) {
      console.log(e);
      this.global.errorToast(val[0], val[1]);
    }
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      // this.isLoading = true;
      // setTimeout(async() => {
      //   this.restaurants = await this.allRestaurants.filter((element: any) => {
      //     return element.short_name.includes(this.query);
      //   });
      //   console.log(this.restaurants);
      //   this.isLoading = false;
      // }, 3000);
    }
  }
}
