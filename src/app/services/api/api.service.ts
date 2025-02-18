import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { Order } from 'src/app/models/order.model';
import { Restaurant } from 'src/app/models/restaurant.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  radius = 20;
  firestore = firebase.firestore();
  GeoFirestore = geofirestore.initializeApp(this.firestore);

  restaurants: Restaurant[] = [];
  allRestaurants: Restaurant[] = [];
  restaurants1: Restaurant[] = [];
  categories: Category[] = []; 
  allItems: Item[] = [];
  addresses: Address[] = [];
  orders: Order[] = [];

  constructor(
    private adb: AngularFirestore
  ) { }

  collection(path, queryFn?) {
    return this.adb.collection(path, queryFn);
  }

  geoCollection(path) {
    return this.GeoFirestore.collection(path);
  }

  randomString() {
    const id = Math.floor(100000000 + Math.random() * 900000000);
    return id.toString();
  }

  async addBanner(data) {
    try {
      const id = this.randomString();
      data.id = id;
      await this.collection('banners').doc(id).set(data);
    } catch(e) {
      console.log(e);
      throw(e);
    } 
  }

  async getBanners() {
    try {
      const banners = await this.collection('banners').get().pipe(
        switchMap(async(data: any) => {
          let bannerData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(bannerData);
          return bannerData;
        })
      ).toPromise();
      console.log(banners);
      return banners;
    } catch(e) {
      throw(e);
    }
  }

  async getCities() {
    try {
      const cities = await this.collection('cities').get().pipe(
        switchMap(async(data: any) => {
          let cityData = await data.docs.map(element => {
            const item = element.data();
            item.uid = element.id;
            return item;
          });
          console.log(cityData);
          return cityData;
        })
      ).toPromise();
      console.log(cities);
      return cities;
    } catch(e) {
      throw(e);
    }
  }

  async addRestaurant(data: any, uid) {
    try {
      let restaurant: any = Object.assign({}, data);
      delete restaurant.g;
      delete restaurant.distance;
      console.log(restaurant);
      const response = await this.geoCollection('restaurants').doc(uid).set(restaurant);
      return response;
    } catch(e) {
      throw(e);
    }
  }

  async getNearbyRestaurants(lat, lng): Promise<any> {
    try {
      const center = new firebase.firestore.GeoPoint(lat, lng);
      const radius = this.radius;
      const data = await (await this.geoCollection('restaurants').near({ center, radius: this.radius })
      .get()).docs.sort((a, b) => a.distance - b.distance).map(element => {
        let item = element.data();
        item['id'] = element.id; // item.id = element.id
        item['distance'] = element.distance; // item.distance = element.distance
        return item;
      });
      return data;
    } catch(e) {
      throw(e);
    }
  }

  async addCategories(categories, uid) {
    try {
      categories.forEach(async(element) => {
        const id = this.randomString();
        const data = new Category(
          id,
          element,
          uid
        );
        const result = await this.collection('categories').doc(id).set(Object.assign({}, data));
      });
      return true;
    } catch(e) {
      throw(e);
    }
  }
}
