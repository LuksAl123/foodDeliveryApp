import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Banner } from 'src/app/models/banner.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BannerService {

  constructor(
    private api: ApiService
  ) { }

    // banner apis
    async addBanner(data) {
      try {
        const id = this.api.randomString();
        // data.id = id;
        const bannerData = new Banner(
          id, 
          data.banner,
          data.status
        );
        let banner = Object.assign({}, bannerData);
        delete banner.res_id;
        await this.api.collection('banners').doc(id).set(banner);
        return true;
      } catch(e) {
        console.log(e);
        throw(e);
      } 
    }

    async getBanners() {
      try {
        const banners: Banner[] = await this.api.collection('banners').get().pipe(
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

}
