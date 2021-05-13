import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListingComponent } from '../clients/components/client-listing/client-listing.component';
import { InvoiceFormComponent } from '../invoices/components/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      
      // {
      //   path: '',
      //   component: MainContentComponent    //eliminated at 2:22:08
      // },
      {
        path: 'invoices',
        component: InvoiceListingComponent
      },
      {
        path: 'invoices/new',
        component: InvoiceFormComponent
      },
      {
        path: 'invoices/:id',
        component: InvoiceFormComponent
      },
      {
        path: 'clients',
        component: ClientListingComponent
      },
      {
        path: '**',           //the last route in the configuration... always.
        redirectTo: 'invoices',
      }
    ]
  }
];   //TIME 2:23:52

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
