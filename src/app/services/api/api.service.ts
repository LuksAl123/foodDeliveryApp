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
import { GeoPoint, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  radius = 20;
  firestoreDB: any = firebase.firestore();
  db = getFirestore();
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

  getGeoPoint(lat, lng) {
    return new GeoPoint(lat, lng);
  }

  collectionRef(path) {
    return collection(this.firestore, path);
  }

  docRef(path) {
    return doc(this.firestore, path);
  }

  document(path) {
    return doc(this.db, path);
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

  getDocByReference(dataRef) {
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

}
