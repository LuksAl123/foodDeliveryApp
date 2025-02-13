import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchLocationComponent } from 'src/app/components/search-location/search-location.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})

export class AddRestaurantPage implements OnInit {

  isLoading: boolean = false;
  coverImage: any;
  cities: any[] = [];
  location: any = {};
  category: string;
  isCuisine: boolean = false;
  cuisines: any[] = [];
  categories: any[] = [];

  constructor(
    private authService: AuthService,
    private global: GlobalService
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {

  }

  async searchLocation() {
    try {
      const options = {
        component: SearchLocationComponent
      };
      const modal = await this.global.createModal(options);
      if(modal) {
        console.log(modal);
        this.location = modal;
      }
    } catch(e) {
      console.log(e);
    }
  }

  addCategory() {
    console.log(this.category);
    if(this.category.trim() == '') return;
    console.log(this.isCuisine);
    const checkString = this.categories.find(x => x == this.category);
    if(checkString) {
      this.global.errorToast('Category already added');
      return;
    }
    this.categories.push(this.category);
    if(this.isCuisine) this.cuisines.push(this.category);
  }

  clearCategory() {
    this.categories = [];
    this.cuisines = [];
  }

  getArrayAsString(array) {
    return array.join(', ');
  }

  preview(event) {
    console.log(event);
    const files = event.target.files;
    if(files.length == 0) return;
    const mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null) return;
    const file = files[0];
    const filePath = 'restaurants/' + Date.now() + '_' + file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('result: ', reader.result);
      this.coverImage =  reader.result;
    }
    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    if(!form.valid) return;
  }

}
