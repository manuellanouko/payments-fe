import { Routes } from '@angular/router';
import {OtherPageComponent} from "./page-components/other-page/other-page.component";
import {PaymentsHomePageComponent} from "./page-components/payments-home-page/payments-home-page.component";

export const routes: Routes = [
  {path: '', component: PaymentsHomePageComponent},
  {path: 'other', component: OtherPageComponent},
];
