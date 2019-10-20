import { Component, OnInit } from '@angular/core';
import { StockItem, StockService } from './services/stock.service';

@Component({
  selector: 'dmb-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  public dealerPicks: StockItem[];
  public otherStock: StockItem[];
  public allStock: boolean;

  constructor(private stockService: StockService) {
    this.dealerPicks = this.stockService.getDealerPicks();
    this.otherStock = this.stockService.getOtherStock(6);
  }

  ngOnInit() {
  }

  public openStock(): void {
    console.log('openStock');
    this.allStock = !this.allStock;
  }

}
