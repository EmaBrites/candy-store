import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Candy } from './candy-list/Candy';

@Injectable({
  providedIn: 'root'
})
export class CandyCartService {

  private _shopList: Candy[] = [];

  shopList: BehaviorSubject<Candy[]> = new BehaviorSubject(this._shopList);

  constructor() { }

  addToCart(candy: Candy) {
    let item = this._shopList.find((v1) => v1.name == candy.name);
    if(!item){
      this._shopList.push({... candy});
    } else {
      item.quantity += candy.quantity;
    }
    console.log(this.shopList);
    this.shopList.next(this._shopList);
  }
}
