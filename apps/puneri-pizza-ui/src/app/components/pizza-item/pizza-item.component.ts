import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartPizza, Pizza } from '../../models/pizza';
import { CrustNamePipe } from '../../pipe/crust-name/crust-name.pipe';

import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NON_VEG_ICON, VEG_ICON } from '../../utils/constants';

@Component({
  selector: 'puneri-pizza-pizza-item',
  standalone: true,
  imports: [CommonModule, MatSelectModule, FormsModule, MatButtonModule, CrustNamePipe, MatIconModule],
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PizzaItemComponent implements OnInit {
  @Input() item: Pizza;
  @Input() selectionCount = 0;
  @Output() addToCart = new EventEmitter<CartPizza>();
  @Output() removePizza = new EventEmitter<number>();

  nonVeg = NON_VEG_ICON;
  veg = VEG_ICON;

  ngOnInit(): void {
    this.item.selectedSize = this.item.size[0];
    this.item.selectedCrust = this.item.crust[0];
  }

  addToCartHandler() {
    const cartPizza = {
      ...this.item,
      type: `${this.item.id}_${this.item.selectedCrust.type}_${this.item.selectedSize.type}`
    }
    this.addToCart.emit(cartPizza);
  }

  customize() {
    // write logic to customize pizza here
  }

  removeFromCart() {
    this.removePizza.emit(this.item.id);
  }
}
