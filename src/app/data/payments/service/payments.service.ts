import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BACKEND_URL} from "../../../constants";
import {GetPaymentsResponseModel} from "../payments-response.model";
import {Observable} from "rxjs";
import {PaymentModel} from "../payment.model";
import {AddPaymentResponseModel} from "../add-payment-response.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  // Pass the httpclient as a parameter to the constructor in order to use it in this file
  constructor(private _httpClient: HttpClient) { }

  public getPayments(pageNumber: number): Observable<GetPaymentsResponseModel> {
    const url = BACKEND_URL + '/payments';
    const requestUrl = `${url}?q=page_number=${pageNumber}`;
    // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '**');
    const httpOptions = {
      headers: new HttpHeaders ({
        "Access-Control-Allow-Origin": "**"
      })
    };
    return this._httpClient.get<GetPaymentsResponseModel>(requestUrl, {headers: httpOptions.headers});
  }

  public addPayment(paymentModel: PaymentModel): Observable<AddPaymentResponseModel> {
    const url = BACKEND_URL + '/payment';
    return this._httpClient.post<AddPaymentResponseModel>(url, paymentModel);
  }

}
