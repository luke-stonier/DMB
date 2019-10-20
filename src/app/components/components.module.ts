import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { StockItemComponent } from './stock-item/stock-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    StockItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    StockItemComponent
  ]
})
export class ComponentsModule { }
