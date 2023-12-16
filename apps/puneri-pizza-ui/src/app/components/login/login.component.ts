import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'puneri-pizza-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))]),
  });

  form2: FormGroup = new FormGroup({
    otp: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  });

  showOtpForm = false;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService) { }

  submitPhone() {
    if (this.form.valid) {
      this.form.disable();
      this.showOtpForm = true;

      this._snackBar.open(`OTP sent to ${this.form.getRawValue().phoneNumber}`, undefined, { duration: 3000 });
    }
  }

  submitOtp() {
    if(this.form2.getRawValue().otp === '123456') {
      this._snackBar.open('Login Successfull', undefined, { duration: 3000 });
      localStorage.setItem('isLoggedIn', `true`);
      this.authService.isLoggedIn$.next(true);
      localStorage.setItem('phoneNumber', this.form.getRawValue().phoneNumber);
      this.router.navigateByUrl('/dashboard');
    }
  }

  editNumber() {
    this.form.reset();
    this.form.enable();
    this.form2.reset();
    this.showOtpForm = false;
  }
}
