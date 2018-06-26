import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Kinvey } from 'kinvey-angular2-sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event manager';
  constructor(private router: Router) {}

  public navigate(event): void {
    if (event.index === 0 ) { this.router.navigateByUrl('/list'); }
    if (event.index === 1 ) { this.router.navigateByUrl('/event'); }
    }
}
