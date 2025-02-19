import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.page.html',
  styleUrls: ['./add-menu-item.page.scss'],
})

export class AddMenuItemPage implements OnInit {

  restaurants: Restaurant[] = [];
  categories: any[] = [];
  image: any;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

  }

}
