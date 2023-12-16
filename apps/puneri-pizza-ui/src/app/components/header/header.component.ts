import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../../services/auth.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'puneri-pizza-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatTabsModule, MatInputModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn = true;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  pincode: string = '411014';
  editPincode = false;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router) {
    this.authService.isLoggedIn$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;

        // if (this.isLoggedIn) {
        //   window.navigator.geolocation.getCurrentPosition(function (pos) {
        //     fetch('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.coords.latitude + ',' + pos.coords.longitude + '&sensor=true')
        //       .then(async(res) => {
        //         console.log(await res.json());
        //       });
        //   });
        // }
      });
  }

  logout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Logout Notice",
        message: 'Do you really want to log out?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        localStorage.clear();
        this.router.navigateByUrl('get-started');
        this.authService.isLoggedIn$.next(false);
      }
    });
  }

  editPincodeHandler() {
    this.editPincode = true;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
