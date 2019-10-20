import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from 'src/app/pages/stock/services/stock.service';

@Component({
  selector: 'dmb-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  @Input() public item: StockItem;

  constructor() { }

  ngOnInit() {
  }

}
