import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CartPizza } from '../models/pizza';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart$ = new BehaviorSubject<CartPizza[]>([]);

  constructor(private _snackBar: MatSnackBar) { }

  getCart() {
    return lastValueFrom(this.cart$.asObservable());
  }

  addToCart(pizza: CartPizza) {
    this.cart$.next([
      ...(this.cart$.getValue() ?? []),
      pizza
    ]);
  }

  removeFromCartById(id: number) {
    const pizzaList = this.cart$.getValue();
    const selectedPizzaList = pizzaList.filter(x => x.id === id);
    if (selectedPizzaList.length === 0) {
      return;
    }
    if (selectedPizzaList.length > 1) {
      let samePizza = true;
      const pizzaType = selectedPizzaList[0].type;
      selectedPizzaList.forEach((pizza) => {
        if (pizzaType !== pizza.type && samePizza) {
          samePizza = false
        }
      });
      if (!samePizza) {
        this._snackBar.open('Multiple customizations of this item are added to cart. Please remove item from cart.', undefined, { duration: 3000 });
        return;
      }
    }
    const index = pizzaList.findIndex(x => x.id === id);
    if (index !== -1) {
      pizzaList.splice(index, 1);
      this.cart$.next(pizzaList)
    }
  }
}
