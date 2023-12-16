import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'puneri-pizza-pizza-item-skeleton',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './pizza-item-skeleton.component.html',
  styleUrl: './pizza-item-skeleton.component.scss',
})
export class PizzaItemSkeletonComponent {}
