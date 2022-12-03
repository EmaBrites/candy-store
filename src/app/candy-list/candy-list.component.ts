import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CandyCartService } from '../candy-cart.service';
import { CandyDataService } from '../candy-data.service';
import { Candy } from './Candy';

@Component({
	selector: 'app-candy-list',
	templateUrl: './candy-list.component.html',
	styleUrls: ['./candy-list.component.scss']
})
export class CandyListComponent {

	candys: Candy[] = []

	constructor(private cart: CandyCartService, private candyDataService: CandyDataService) {
	}

	ngOnInit(): void {
		this.candyDataService.getCandyData().subscribe((data: Candy[]) => {
			this.candys = data;
		});
		// me suscribo al carrito para actualizar el stock pero falta actualizar el stock de los productos que se quitan del carrito
		this.cart.getShopList().subscribe((data: Candy[]) => {
		});
	}

	addToCart(candy: Candy) {
		this.cart.addToCart(candy);
		candy.stock -= candy.quantity;
		candy.quantity = 0;
	}

}
