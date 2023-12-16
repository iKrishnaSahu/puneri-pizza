import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaItemSkeletonComponent } from '../pizza-item-skeleton/pizza-item-skeleton.component';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../models/pizza';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';

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

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    // adding timeout to show animation when loading
    setTimeout(() => {
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
  }
}
