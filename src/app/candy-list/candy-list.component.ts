import { Component } from '@angular/core';
import { CandyCartService } from '../candy-cart.service';
import { CandyDataService } from '../candy-data.service';
import { Candy } from './Candy';

@Component({
	selector: 'app-candy-list',
	templateUrl: './candy-list.component.html',
	styleUrls: ['./candy-list.component.scss']
})
export class CandyListComponent {

	candys: Candy[] = [
		{
			"name": "Snickers",
			"type": "Chocolate",
			"price": 1.00,
			"description": "A chocolate bar with peanuts",
			"stock": 10,
			"image": "./assets/img/candys/snickers.webp",
			quantity: 0,
		},
		{
			name: 'Twix',
			type: 'Chocolate',
			price: 1.00,
			description: 'A chocolate bar with caramel',
			stock: 10,
			image: './assets/img/candys/twix.jpeg',
			quantity: 0,
		},
		{
			name: 'M&Ms',
			type: 'Chocolate',
			price: 1.00,
			description: 'A chocolate bar with M&Ms',
			stock: 10,
			image: './assets/img/candys/M&Ms.jpg',
			quantity: 0,
		},
		{
			name: 'Skittles',
			type: 'Candy',
			price: 1.00,
			description: 'A bag of Skittles',
			stock: 10,
			image: './assets/img/candys/Skittles.webp',
			quantity: 0,
		},
		{
			name: 'Billiken',
			type: 'Candy',
			price: 1.00,
			description: 'A bag of Billiken',
			stock: 10,
			image: './assets/img/candys/Billiken.jpg',
			quantity: 0,
		},
	];

	constructor(private cart: CandyCartService, private candyDataService: CandyDataService) { }

	ngOnInit(): void {
		this.candyDataService.getCandyData().subscribe((data: Candy[]) => {
			this.candys = data;
		});
	}

	upQuantity(candy: Candy) {
		if (candy.stock > 0 && candy.quantity < candy.stock) {
			candy.quantity++;
		}
	}
	downQuantity(candy: Candy) {
		if (candy.quantity > 0) {
			candy.quantity--;
		}
	}
	addToCart(candy: Candy) {
		this.cart.addToCart(candy);
		candy.stock -= candy.quantity;
		candy.quantity = 0;
	}
}
