import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { PizzaService } from './services/pizza.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule, HttpClientModule],
  providers: [PizzaService],
  selector: 'puneri-pizza-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authService: AuthService) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.authService.isLoggedIn$.next(true);
    }
  }
}
