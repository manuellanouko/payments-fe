import {PaymentModel} from "./payment.model";

export interface GetPaymentsResponseModel {
  payments: PaymentModel[];
  total_count: number;
}
