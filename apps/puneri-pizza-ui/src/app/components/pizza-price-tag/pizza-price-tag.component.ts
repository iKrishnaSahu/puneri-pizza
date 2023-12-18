import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPizza, Pizza } from '../../models/pizza';

@Component({
  selector: 'puneri-pizza-pizza-price-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-price-tag.component.html',
  styleUrl: './pizza-price-tag.component.scss',
})
export class PizzaPriceTagComponent {
  @Input() pizza: Pizza | CartPizza;

  getToppingsTotal() {
    return this.pizza.selectedToppings?.reduce((p, c) => p + c.price, 0) ?? 0;
  }
}
