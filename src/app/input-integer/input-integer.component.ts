import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candy } from '../candy-list/Candy';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {

  @Input()
  quantity!: number; 

  @Input()
  max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity() {
		if (this.max > 0 && this.quantity < this.max) {
			this.quantity++;
      this.quantityChange.emit(this.quantity);
		}
	}
	downQuantity() {
		if (this.quantity > 0) {
			this.quantity--;
      this.quantityChange.emit(this.quantity);
		}
	}

}
