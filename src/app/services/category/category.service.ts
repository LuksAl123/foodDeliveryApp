import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { switchMap } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(
    private api: ApiService
  ) { }

    // category apis
    async getRestaurantCategories(uid) {
      try {
        const categories = await this.api.collection(
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
          const id = this.api.randomString();
          const data = new Category(
            id,
            element,
            uid
          );
          const result = await this.api.collection('categories').doc(id).set(Object.assign({}, data));
        });
        return true;
      } catch(e) {
        throw(e);
      }
    }  

}
