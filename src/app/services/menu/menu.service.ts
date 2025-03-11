import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Item } from 'src/app/models/item.model';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(
    private api: ApiService
  ) { }

  // menu
  async addMenuItem(data) {
    try {
      const id = this.api.randomString();
      const item = new Item(
        id,
        data.restaurant_id,
        this.api.document(`categories/${data.category_id}`),
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
      const result = await this.api.collection('menu').doc(data.restaurant_id).collection('allItems').doc(id).set(itemData);
      return true;
    } catch(e) {
      throw(e);
    }
  }

  async getRestaurantMenu(uid) {
    try {
      const itemsRef = await this.api.collection('menu').doc(uid)
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
