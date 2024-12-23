import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.page.html',
  styleUrls: ['./sub-page.page.scss'],
})

export class SubPagePage implements OnInit {

  // items: any[] = [];
  private route = inject(ActivatedRoute);
  public navCtrl = inject(NavController);
  // private apiService = inject(ApiService);

  constructor() {
  // constructor(public navCtrl: NavController) { 
    console.log('constructor subpage');
   }

  ngOnInit() {
    console.log('ngoninit subpage');
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.items = this.apiService.getItems();
    this.synchronous();
    this.asynchronous();
  }

  synchronous() {
    console.log('Start');
    for (let i = 0; i < 10; i++) {
      // Simulate a long-running task
      console.log(i);
    }
    console.log('End');
  }

  async asynchronous() {
    console.log('Start');

    setTimeout(() => {
      console.log('Timeout');
    }, 1000);

    console.log('End');
  }

  // goBack(){
  //   this.navCtrl.back();
  //   this.navCtrl.navigateRoot('/tabs');
  // }
}
