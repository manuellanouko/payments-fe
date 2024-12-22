import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import {PaymentsNavbarComponent} from "./shared-components/payments-navbar/payments-navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    MatToolbarModule,
    MatTableModule,

    PaymentsNavbarComponent,
  ],
  providers: [ HttpClientModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Payments Management';
}
