import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart.interface';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.page.html',
  styleUrls: ['./payment-option.page.scss'],
})

export class PaymentOptionPage implements OnInit, OnDestroy {

  url: any;
  urlCheck: any;
  profile = {} as User;
  order = {} as Order;
  profileSub: Subscription;

  constructor(
    public router: Router,
    private profileService: ProfileService,
    private cartService: CartService,
    private orderService: OrderService,
    private global: GlobalService
  ) { }

  async ngOnInit() {
    await this.getData();
    this.profileSub = this.profileService.profile.subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  }

  async getData() {
    try {
      await this.checkUrl();
      await this.profileService.getProfile();
      const order = await this.cartService.getCartOrder();
      console.log(order);
      this.order = JSON.parse(order?.value);
    } catch(e) {
      console.log(e);
      this.global.errorToast(); 
    }
  }

  checkUrl() {
    let url: any = (this.router.url).split('/');
    console.log('url: ', url);
    const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1
    this.urlCheck = spliced[0];
    console.log('urlcheck: ', this.urlCheck);
    url.push(this.urlCheck);
    this.url = url;
    console.log(this.url);
  }

  getPreviousUrl() {
    return this.url.join('/');
  }

  async placeOrder(param?) {
    try {
      this.global.showLoader();
      const order = {
        ...this.order,
        ...param
      };
      await this.orderService.placeOrder(order);
      // clear cart
      await this.cartService.clearCart();
      this.global.hideLoader();
      this.global.successToast('Your Order is Placed Successfully');
      this.router.navigateByUrl('/tabs/account');
    } catch(e) {
      console.log(e);
      this.global.hideLoader();
      this.global.errorToast();
    }
  }

  async ngOnDestroy() {
    await this.cartService.clearCartOrder();
    if(this.profileSub)this.profileSub.unsubscribe();
  }

}
