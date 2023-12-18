import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Pizza, Topping } from '../../models/pizza';
import { MatSelectModule } from '@angular/material/select';
import { CrustNamePipe } from '../../pipe/crust-name/crust-name.pipe';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { PizzaPriceTagComponent } from '../pizza-price-tag/pizza-price-tag.component';

export interface ToppingsDialogData {
  pizza: Pizza;
}

@Component({
  selector: 'puneri-pizza-toppings',
  standalone: true,
  imports: [
    CommonModule, MatInputModule, MatDialogModule,
    FormsModule, MatButtonModule, MatSelectModule, CrustNamePipe,
    MatCheckboxModule, PizzaPriceTagComponent
  ],
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss',
})
export class ToppingsComponent {

  toppings: Topping[] = JSON.parse(localStorage.getItem('toppings') ?? '[]');

  constructor(
    public dialogRef: MatDialogRef<ToppingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToppingsDialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  extraCheeseChangeHandler(event: MatCheckboxChange) {
    if (event.checked) {
      this.data.pizza.selectedCheese = this.data.pizza.cheese.find(x => x.size === this.data.pizza.selectedSize.type) ?? this.data.pizza.cheese[0];
    } else {
      this.data.pizza.selectedCheese = undefined as any;
    }
  }

  getExtraCheesePrice() {
    return this.data.pizza.cheese.find(x => x.size === this.data.pizza.selectedSize.type)?.price;
  }

  toppingAlreadyAdded(topping: Topping) {
    return this.data.pizza.selectedToppings?.find(x => x.name === topping.name);
  }

  addTopping(topping: Topping) {
    this.data.pizza.selectedToppings = [
      ...(this.data.pizza.selectedToppings ?? []),
      topping
    ];
  }

  removeTopping(topping: Topping) {
    const index = this.data.pizza.selectedToppings?.findIndex(top => top.name === topping.name);
    if (index > -1) {
      this.data.pizza.selectedToppings.splice(index, 1);
    }
  }
}
