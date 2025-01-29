import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Address } from '../../../app/models/address.model';

@Injectable({
  providedIn: 'root'
})

export class AddressService {

  private _addresses = new BehaviorSubject<Address[]>([]);

  get addresses() {
    return this._addresses.asObservable();
  }

  constructor(private api: ApiService) { }

  getAddresses() {
    try {
      //user id
      let allAddress: Address[] = this.api.addresses;
      console.log(allAddress);
      this._addresses.next(allAddress);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  addAddress(param) {
    param.id = 'address1';
    param.user_id = 'user1';
    const currentAddresses = this._addresses.value;
    currentAddresses.push(
      new Address(
        param.id,
        param.user_id,
        param.title,
        param.address,
        param.landmark,
        param.house,
        param.lat,
        param.lng
      )
    );
    this._addresses.next(currentAddresses);
  }

  updateAddress(id, param) {
    const currentAddreses = this._addresses.value;
    const index = this.addresses.findIndex(x => x.id == address.id);
  }

  deleteAddress(param) {
    param.delete = true;
    this._addresses.next(param);
  }
}
