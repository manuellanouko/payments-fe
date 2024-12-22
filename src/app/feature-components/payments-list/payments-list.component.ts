import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GetPaymentsResponseModel} from "../../data/payments/payments-response.model";
import {PaymentModel} from "../../data/payments/payment.model";
import {PaymentsService} from "../../data/payments/service/payments.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-payments-list',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './payments-list.component.html',
  styleUrl: './payments-list.component.scss'
})
export class PaymentsListComponent implements AfterViewInit {
  // Define the table columns
  displayedColumns: string[] = [
    "payee_first_name",
    "payee_last_name",
    "payee_payment_status",
    "payee_added_date_utc",
    "payee_due_date",
    "payee_address_line_1",
    "payee_address_line_2",
    "payee_city",
    "payee_country",
    "payee_province_or_state",
    "payee_postal_code",
    "payee_phone_number",
    "payee_email",
    "currency",
    "discount_percent",
    "tax_percent",
    "due_amount",
    "total_due",
  ]
  // Variables to store data?
  // Create a variable for payments response?
  // Create a variable for the actual payments?
  getPaymentsResponse: GetPaymentsResponseModel = {
    payments: [],
    total_count: 0
  };
  paymentsData: PaymentModel[] = []
  // state variables: e.g. pagination, filter, sort variables
  pageNumber: number = 0
  totalPages: number = 1
  isLoading: boolean = true

  // The constructor
  // Link the component to the service (the payment service)
  constructor(private paymentsService: PaymentsService) {}

  // ALL HANDLERS / EVENTS
  // We add this since the Component class inherits from OnInit.
  // This defines what happens on init: i.e. when the page loads?
  ngAfterViewInit(): void {
    this.paymentsService.getPayments(this.pageNumber).subscribe({
      next: (results: GetPaymentsResponseModel) => {
        this.updateGetPayments(results)
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
  // On next/previous page clicked
  onNextPreviousPageClicked(pageNumberSelected: number){
    this.pageNumber = pageNumberSelected;
    this.paymentsService.getPayments(pageNumberSelected).subscribe({
      next: (results: GetPaymentsResponseModel) => {
        this.updateGetPayments(results)
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }

  // Helper Functions
  updateGetPayments(results: GetPaymentsResponseModel): void{
    this.isLoading = false;
    this.getPaymentsResponse = results;
    this.paymentsData = this.getPaymentsResponse.payments;
    this.totalPages = this.getPaymentsResponse.total_count;
  }

}
