import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartPizza } from '../../models/pizza';
import { ReplaySubject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'puneri-pizza-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, CartItemComponent, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnDestroy {
  cartItems: CartPizza[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(cartPizza => {
        this.cartItems = cartPizza;
        this.total = 0;
        this.cartItems.forEach(cartPizza => {
          this.total += cartPizza.basePrice + cartPizza.selectedCrust.price + cartPizza.selectedSize.price;
        });
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
