import { Component } from '@angular/core';
import { Candy } from './Candy';

@Component({
	selector: 'app-candy-list',
	templateUrl: './candy-list.component.html',
	styleUrls: ['./candy-list.component.scss']
})
export class CandyListComponent {

	candys: Candy[] = [
		{
			name: 'Snickers',
			type: 'Chocolate',
			price: 1.00,
			description: 'A chocolate bar with peanuts',
			stock: 10,
			image: './assets/img/candys/snickers.webp'
		},
		{	
			name: 'Twix',
			type: 'Chocolate',
			price: 1.00,
			description: 'A chocolate bar with caramel',
			stock: 10,
			image: './assets/img/candys/twix.jpeg'
		},
		{
			name: 'M&Ms',
			type: 'Chocolate',
			price: 1.00,
			description: 'A chocolate bar with M&Ms',
			stock: 10,
			image: './assets/img/candys/M&Ms.jpg'
		},
		{
			name: 'Skittles',
			type: 'Candy',
			price: 1.00,
			description: 'A bag of Skittles',
			stock: 10,
			image: './assets/img/candys/Skittles.webp'
		},
		{
			name: 'Billiken',
			type: 'Candy',
			price: 1.00,
			description: 'A bag of Billiken',
			stock: 10,
			image: './assets/img/candys/Billiken.jpg'
		},
	];
}
