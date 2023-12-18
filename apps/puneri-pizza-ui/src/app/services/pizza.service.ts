import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pizza, Topping } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  httpClient = inject(HttpClient);

  constructor() { }

  getPizza(): Promise<Pizza[]> {
    return lastValueFrom(this.httpClient.get<Pizza[]>('api/pizza'));
  }

  getToppings(): Promise<Topping[]> {
    return lastValueFrom(this.httpClient.get<Topping[]>('api/pizza/toppings'))
      .then((data) => {
        localStorage.setItem('toppings', JSON.stringify(data));
        return data;
      });
  }
}
