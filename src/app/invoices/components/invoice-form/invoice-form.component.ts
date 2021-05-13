import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { Invoice } from '../../models/invoice';

import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  private invoice: Invoice ={
    _id: '',
    item: '',
    qty: 0,
    date: new Date(),
    due: new Date(),
    tax: 0,
    rate: 0
   }
  invoiceForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private invoiceService: InvoiceService,
              public snackBar:MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.createForm();
    this.setInvoiceToForm();
   }
  private createForm() {
    this.invoiceForm = this.fb.group({
      item:['', Validators.required],
      date:['', Validators.required],
      due:['', Validators.required],
      qty:['', Validators.required],
      rate:'',
      tax:'',
    })
  }
  

   onSubmit(){
     //debugger;
     //console.log(this.invoiceForm.value);
     if (this.invoice) {
       this.invoiceService
       .updateInvoice(this.invoice._id, this.invoiceForm.value)
       .subscribe(data => {
         this.snackBar.open('Invoice updated', 'Success', {duration: 2000});
         this.router.navigate(['dashboard', 'invoices']);
       }, err => this.errorHandler(err, 'Failed to update invoice'));
     }
     else {
      this.invoiceService.createInvoice(this.invoiceForm.value)
      .subscribe(data => {
        this.snackBar.open('Invoice created!', 'Success', {duration:2000})
        this.invoiceForm.reset();
        this.router.navigate(['dashboard', 'invoices']);
        // console.log(data);}, 
      }, 
      err => this.errorHandler(err, 'Failed to create invoice')
      //err => console.error(err)
   )
     }
     
  }

  private setInvoiceToForm(){
    
    let id = this.route.snapshot.params.id;  //this get the id
    //console.log(id);
    this.invoiceService.getInvoice(id)
      .subscribe(invoice => {
        this.invoice = invoice;
        this.invoiceForm.patchValue(this.invoice); //to populate the form
      }, err => this.errorHandler(err, 'Failed to get Invoice'))

    //   this.route.subscribe(params => {
    //   let id = params['id'];
    //   console.log(id);
    // } 
  }

  private errorHandler(error: any, message: string){
    console.error(error);
    this.snackBar.open(message, 'Error', {duration: 2000})
  }
}
