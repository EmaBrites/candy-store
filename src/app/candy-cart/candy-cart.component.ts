import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CandyCartService } from '../candy-cart.service';
import { Candy } from '../candy-list/Candy';

@Component({
  selector: 'app-candy-cart',
  templateUrl: './candy-cart.component.html',
  styleUrls: ['./candy-cart.component.scss']
})
export class CandyCartComponent {

  cartList$: Observable<Candy[]>;
  total$: Observable<number>;

  constructor(private cart: CandyCartService) {
    this.cartList$ = cart.shopList.asObservable();
    this.total$ = cart.shopTotal.asObservable();
  }

  updateCart(event: any, candy: Candy) {
    candy.quantity = event;
    this.cart.updateCart(candy);
  }

  removeFromCart(candy: Candy) {
    this.cart.removeFromCart(candy);
  }

  

}
