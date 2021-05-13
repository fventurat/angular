import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.js';

const BASE_URL = 'HTTP://localhost:3000/api'
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<Invoice[]>{
    return this.httpClient.get<Invoice[]>(`${BASE_URL}/invoices`)

  }

  createInvoice(body: Invoice) :Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${BASE_URL}/invoices`, body)

  }

  deleteInvoice(id: string): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${BASE_URL}/invoices/${id}`)
  }

  getInvoice(id: string): Observable<Invoice>{
    return this.httpClient.get<Invoice>(`${BASE_URL}/invoices/${id}`)
  }

  updateInvoice(id:string, body:Invoice){
    return this.httpClient.put<Invoice>(`${BASE_URL}/invoices/${id}`, body)
  }
}
