import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface TransactionData {
    customer_id: number;
    transaction_desc: string;
    amount: number;
    payment_type: string;
    category: string;
    date: string;
  }
export interface SpendViewDataByMonth {
    by_month?: string;
    customer_number: string;
    total_incomming: string;
    total_outgoing: string;
    closing_balance: string;
  }
export interface SpendViewDataByPaymentType {
    by_month?: string;
    by_paymenttype: string;
    customer_number: string;
    total_incomming: string;
    total_outgoing: string;
    closing_balance: string
  }
  
  const transactionData: TransactionData[] = [
    {customer_id: 45785456, transaction_desc: 'Loan EMI', amount: 5000, payment_type: 'Debit', category: 'House', date: '01/01/2021'},
    {customer_id: 45785457, transaction_desc: 'Finace Charges', amount: 6000, payment_type: 'Debit', category: 'Vehicle', date: '02/01/2021'},
    {customer_id: 45785458, transaction_desc: 'Groceries', amount: 7000, payment_type: 'Debit', category: 'Food', date: '02/02/2021'},
    {customer_id: 45785459, transaction_desc: 'Credit card Bill', amount:3000, payment_type: 'Debit', category: 'Entertainmant', date: '03/02/2021'},
    {customer_id: 45785455, transaction_desc: 'Transfer from xxx', amount: 2000, payment_type: 'Credit', category: 'Income source 1', date: '03/03/2021'},
    {customer_id: 45785453, transaction_desc: 'Transfer from yyy', amount: 20000, payment_type: 'Credit', category: 'Income source 1', date: '04/03/2021'},
    
  ];
  const spendViewDataByMonth: SpendViewDataByMonth[] = [
      {by_month: 'Jan-2020', customer_number: '3232332332', total_incomming: '0.00', total_outgoing: '50.00', closing_balance: '1250.00'},
      {by_month: 'Feb-2020', customer_number: '3232332332', total_incomming: '450.00', total_outgoing: '123.00', closing_balance: '1577.00'},
      {by_month: 'March-2020', customer_number: '3232332332', total_incomming: '1047.00', total_outgoing: '2386.00', closing_balance: '238.00'},
  ];
  const spendViewDataByPaymentType: SpendViewDataByPaymentType[] = [
    {by_paymenttype: 'Debit', customer_number: '3232332332', total_incomming: '0.00', total_outgoing: '50.00', closing_balance: '1250.00'},
    {by_paymenttype: 'Credit', customer_number: '3232332332', total_incomming: '450.00', total_outgoing: '0.00', closing_balance: '1577.00'},
    {by_paymenttype: 'Debit', customer_number: '3232332332', total_incomming: '0.00', total_outgoing: '2386.00', closing_balance: '238.00'},
    {by_paymenttype: 'Credit', customer_number: '3232332332', total_incomming: '1047.00', total_outgoing: '0.00', closing_balance: '238.00'}
  ];
@Component({
    selector: 'app-spend-view-table',
    templateUrl: 'spend-view-table.component.html',
    styleUrls: ['spend-view-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})




export class SpendViewTableComponent implements OnInit {
    displayedColumns_byMonth: string[] = ['Month', 'Customer_Number', 'Total_Incoming', 'Total_Outgoing', 'Closing_Balance'];
    displayedColumns_byPaymentTType: string[] = ['Payment_Mode', 'Customer_Number', 'Total_Incoming', 'Total_Outgoing', 'Closing_Balance'];
    dataSource = spendViewDataByMonth;
    toggle: FormControl
    selectedToggle = 'month';
    constructor() { }

    ngOnInit() {
        this.toggle = new FormControl('month');
        this.toggle.valueChanges.subscribe((data) => {
            console.log('Form Data', data);
            if(data === 'month') {
                this.selectedToggle = 'month';
                this.dataSource = spendViewDataByMonth;
            } else {
                this.selectedToggle = 'payment-type';
                this.dataSource = spendViewDataByPaymentType;
            }
        })
     }
}