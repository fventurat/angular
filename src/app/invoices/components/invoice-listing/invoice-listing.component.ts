import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice'
import { Router } from '@angular/router';
import { ConstantPool } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { remove } from 'lodash';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  constructor(private invoiceService: InvoiceService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['item', 'date', 'due', 'qty', 'tax', 'rate', 'action'];
  //dataSource = ELEMENT_DATA;
  dataSource: Invoice[] = [];

  saveBtnHandler() {
    this.router.navigate(['dashboard', 'invoices', 'new'])
  }

  editBtnHandler(id: any){
    this.router.navigate(['dashboard', 'invoices', id])

  }

  deleteBtnHandler(id: any) {
    this.invoiceService.deleteInvoice(id)
    .subscribe(data => {
      remove(this.dataSource, (item) => {
        return item._id === data._id
      });
      this.dataSource = [...this.dataSource];
      this.snackBar.open('Invoice deleted', 'Success', {duration: 2000})
    }, err=> this.errorHandler(err, 'Failed to delete invoice')
  )}


  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(
      data => {
      this.dataSource = data;
      console.log(data)
    }, err => this.errorHandler(err, 'Failed to fetch invoices')
    )
  }

  private errorHandler(error: any, message: string){
    console.error(error);
    this.snackBar.open(message, 'Error', {duration: 2000})
  }

}
