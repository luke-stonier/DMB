import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { LandingComponent } from './landing/landing.component';
import { StockComponent } from './stock/stock.component';
import { MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    LandingComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    LandingComponent,
    StockComponent
  ]
})
export class PagesModule { }
