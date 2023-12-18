import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaItemSkeletonComponent } from '../pizza-item-skeleton/pizza-item-skeleton.component';
import { PizzaService } from '../../services/pizza.service';
import { CartPizza, Pizza } from '../../models/pizza';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'puneri-pizza-dashboard',
  standalone: true,
  imports: [CommonModule, PizzaItemSkeletonComponent, PizzaItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  pizzaList: Pizza[] = [];
  isLoading = false;
  dummyArray = Array.from(Array(10).keys());
  selectedPizza: Pizza[] = [];

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.isLoading = true;
    // adding timeout to show animation when loading
    setTimeout(async() => {
      await this.pizzaService.getToppings();
      this.pizzaService.getPizza()
        .then((pizzaList) => {
          this.pizzaList = pizzaList;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        })
    }, 2000);
    this.cartService.cart$
      .subscribe(pizza => {
        this.selectedPizza = pizza;
      })
  }

  addToCartHandler(event: CartPizza) {
    // TODO: this should be done in backend
    this.cartService.addToCart(event);
  }

  getCount(item: Pizza) {
    return this.selectedPizza.filter(x => x.id === item.id).length;
  }

  removePizzaHandler(event: number) {
    // TODO: this should be done in backend
    this.cartService.removeFromCartById(event);
  }
}
