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

  constructor(private cart: CandyCartService) { 
    this.cartList$ = cart.shopList.asObservable();
  }


  

}
