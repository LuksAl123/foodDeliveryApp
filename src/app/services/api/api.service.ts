import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';
import { Banner } from 'src/app/models/banner.model';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc, getDocs, limit, query, updateDoc, where } from '@angular/fire/firestore';
import { Restaurant } from 'src/app/models/restaurant.model';
import { Address } from 'src/app/models/address.model';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  radius = 20;
  firestoreDB: any = firebase.firestore();
  GeoFirestore = geofirestore.initializeApp(this.firestoreDB);

  restaurants: Restaurant[] = [];
  allRestaurants: Restaurant[] = [];
  restaurants1: Restaurant[] = [];
  categories: Category[] = [];
  allItems: Item[] = [];
  addresses: Address[] = [];
  orders: Order[] = [];

  constructor(
    private adb: AngularFirestore,
    private firestore: Firestore
  ) { }

  collectionRef(path) {
    return collection(this.firestore, path);
  }

  docRef(path) {
    return doc(this.firestore, path);
  }

  collectionDataQuery(path, id?) {
    let dataRef = this.collectionRef(path);
    let collection_data;
    if(id) collection_data = collectionData<any>(dataRef, {idField: 'id'});
    else collection_data = collectionData<any>(dataRef);
    return collection_data;
  }

  getDocs(path, queryFn?) {
    let dataRef: any = this.collectionRef(path);
    if(queryFn) {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }
    return getDocs<any, any>(dataRef); //get()
  }

  getExistingAddress(path, lat, lng) {
    let dataRef: any = this.collectionRef(path);
    const q = query(dataRef, where('lat', '==', lat), where('lng', '==', lng));
    return getDocs<any, any>(q);
  }

  getDocById(path) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
  }

  addDocument(path, data) {
    const dataRef = this.collectionRef(path);
    return addDoc<any, any>(dataRef, data); //add()
  }

  updateDocument(path, data) {
    const dataRef = this.docRef(path);
    return updateDoc<any, any>(dataRef, data); //update()
  }

  deleteDocument(path) {
    const dataRef = this.docRef(path);
    return deleteDoc(dataRef); //delete()
  }

  limitQuery(number) {
    return limit(number);
  }

  whereQuery(fieldPath, condition, value) {
    where(fieldPath, condition, value);
  }

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

  // banner apis
  async addBanner(data) {
    try {
      const id = this.randomString();
      // data.id = id;
      const bannerData = new Banner(
        id, 
        data.banner,
        data.status
      );
      let banner = Object.assign({}, bannerData);
      delete banner.res_id;
      await this.collection('banners').doc(id).set(banner);
      return true;
    } catch(e) {
      console.log(e);
      throw(e);
    } 
  }

  async getBanners() {
    try {
      const banners: Banner[] = await this.collection('banners').get().pipe(
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

  // city apis
  async getCities() {
    try {
      const cities = await this.collection('cities').get().pipe(
        switchMap(async(data: any) => {
          let cityData = await data.docs.map(element => {
            let item = element.data();
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

  // restaurant apis
  async addRestaurant(data: any, uid) {
    try {
      let restaurant = Object.assign({}, data);
      delete restaurant.g;
      delete restaurant.distance;
      console.log(restaurant);
      const response = await this.geoCollection('restaurants').doc(uid).set(restaurant);
      return response;
    } catch(e) {
      throw(e);
    }
  }

  async getRestaurants() {
    try {
      const restaurants = await this.collection('restaurants').get().pipe(
        switchMap(async(data: any) => {
          let restaurantData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(restaurantData);
          return restaurantData;
        })
      ).toPromise();
      console.log(restaurants);
      return restaurants;
    } catch(e) {
      throw(e);
    }
  }

  async getRestaurantById(id): Promise<any> {
    try {
      const restaurant = (await (this.collection('restaurants').doc(id).get().toPromise())).data();
      console.log(restaurant);
      return restaurant;
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

  // category apis
  async getRestaurantCategories(uid) {
    try {
      const categories = await this.collection(
        'categories',
        ref => ref.where('uid', '==', uid)
      ).get().pipe(
        switchMap(async(data: any) => {
          let categoryData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(categoryData);
          return categoryData;
        })
      ).toPromise();
      console.log(categories);
      return categories;
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

  // menu
  async addMenuItem(data) {
    try {
      const id = this.randomString();
      const item = new Item(
        id,
        data.restaurant_id,
        this.firestoreDB.collection('categories').doc(data.category_id),
        data.cover,
        data.name,
        data.description,
        data.price,
        data.veg,
        data.status,
        false,
        0
      );
      let itemData = Object.assign({}, item);
      delete itemData.quantity;
      console.log(itemData);
      const result = await this.collection('menu').doc(data.restaurant_id).collection('allItems').doc(id).set(itemData);
      return true;
    } catch(e) {
      throw(e);
    }
  }

  async getRestaurantMenu(uid) {
    try {
      const itemsRef = await this.collection('menu').doc(uid)
          .collection('allItems', ref => ref.where('status', '==', true));
      const items = itemsRef.get().pipe(
        switchMap(async(data: any) => {
          let itemData = await data.docs.map(element => {
            let item = element.data();
            item.category_id.get()
            .then(cData => {
              item.category_id = cData.data();
            })
            .catch(e => { throw(e); });
            return item;
          });
          console.log(itemData);
          return itemData;
        })
      )
      .toPromise();
      console.log(items);
      return items;
    } catch(e) {
      throw(e);
    }
  }

}
