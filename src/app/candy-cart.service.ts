import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candy } from './candy-list/Candy';

@Injectable({
  providedIn: 'root'
})
export class CandyCartService {

  private _shopList: Candy[] = [];
  private _shopTotal: number = 0;

  shopList: BehaviorSubject<Candy[]> = new BehaviorSubject(this._shopList);
  shopTotal: BehaviorSubject<number> = new BehaviorSubject(this._shopTotal);

  constructor() { }

  addToCart(candy: Candy) {
    let item = this._shopList.find((v1) => v1.name == candy.name);
    if (!item) {
      this._shopList.push({ ...candy });
    } else {
      item.quantity += candy.quantity;
    }
    this.shopList.next(this._shopList);
    this.calculateTotal();
  }
  calculateTotal() {
    this._shopTotal = 0;
    this._shopList.forEach(v => {
      this._shopTotal += (v.quantity * v.price);
    });
    this.shopTotal.next(this._shopTotal);
  }
  updateCart(candy: Candy) {
    let item = this._shopList.find((v1) => v1.name == candy.name);
    if (item) {
      let difference = item.quantity - candy.quantity;
      item.quantity = candy.quantity;
      item.stock = candy.stock + difference;
    }
    this.shopList.next(this._shopList);
    this.calculateTotal();
  }
  // al quitar un producto del carrito, falta actualizar el stock
  removeFromCart(candy: Candy) {
    let index = this._shopList.findIndex((v1) => v1.name == candy.name);
    if (index != -1) {
      this._shopList.splice(index, 1);
    }
    this.shopList.next(this._shopList);
    this.calculateTotal();
  }
  getShopList(): Observable<Candy[]> {
    return this.shopList.asObservable();
  }
}
