import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'puneri-pizza-pizza-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss',
})
export class PizzaItemComponent {
  @Input() item: Pizza;
}
