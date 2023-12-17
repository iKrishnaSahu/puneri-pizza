import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartPizza } from '../../models/pizza';

@Component({
  selector: 'puneri-pizza-cart-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() item: CartPizza;
}
