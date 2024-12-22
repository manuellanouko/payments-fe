import { Component } from '@angular/core';
import {PaymentsListComponent} from "../../feature-components/payments-list/payments-list.component";

@Component({
  selector: 'app-payments-home-page',
  standalone: true,
  imports: [
    PaymentsListComponent
  ],
  templateUrl: './payments-home-page.component.html',
  styleUrl: './payments-home-page.component.scss'
})
export class PaymentsHomePageComponent {

}
