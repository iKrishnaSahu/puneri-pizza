import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  getPizza(): Promise<Pizza[]> {
    return lastValueFrom(this.httpClient.get<Pizza[]>('api/pizza'));
  }
}
