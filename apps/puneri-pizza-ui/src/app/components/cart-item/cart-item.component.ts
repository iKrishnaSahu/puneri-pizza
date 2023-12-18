import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartPizza } from '../../models/pizza';
import { PizzaPriceTagComponent } from '../pizza-price-tag/pizza-price-tag.component';
import { CrustNamePipe } from '../../pipe/crust-name/crust-name.pipe';

@Component({
  selector: 'puneri-pizza-cart-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, PizzaPriceTagComponent, CrustNamePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() item: CartPizza;

  getToppings() {
    return this.item.selectedToppings.map(x => x.name);
  }
}
