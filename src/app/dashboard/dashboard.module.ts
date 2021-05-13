import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InvoicesModule } from '../invoices/invoices.module';
import { MaterialModule } from  '../shared/material/material.module'
import { ClientsModule } from '../clients/clients.module';



@NgModule({
  declarations: [
    DashboardComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule
  ]
})
export class DashboardModule { }