import { Injectable } from '@angular/core';

export class StockItem {
    constructor(public id: number,
                public name: string,
                public image: string,
                public price: string,
                public misc: string,
                public dealerPick: boolean) { }
}

@Injectable({ providedIn: 'root' })
export class StockService {

    public stock: StockItem[] = [
        new StockItem(0, 'McLaren 720s 4.0T V8 Luxury SSG', '/assets/DSC08386-1199x800.jpg', '£164,890', '', true),
        new StockItem(1, 'Porsche 911 3.0T 991 Carrera PDK', '/assets/DSC08529-1199x800.jpg', '£59,995', '', false),
        new StockItem(2, 'Mercedes-Benz C Class 4.0 C63 V8 BiTurbo AMG S', '/assets/DSC08725-1199x800.jpg', '£54,995', '', true),
        new StockItem(3, 'Porsche 911 3.8 991 Carrera GTS PDK', '/assets/27a5bff09e49423a862bd2c4560357ef.jpg', '£74,950', '', false),
        new StockItem(4, 'Porsche Cayenne 3.0T V6 Tiptronic 4WD', '/assets/DSC08068-1199x800.jpg', '£66,950', '', false),
        new StockItem(5, 'McLaren 570S 3.9T V8 SSG', '/assets/DSC08664-1199x800.jpg', '£97,995', '', false),
        new StockItem(6, 'Porsche Cayman 3.8 981 GT4', '/assets/DSC08517-1199x800.jpg', '£74,990', '', false),
        new StockItem(7, 'Mercedes-Benz Gla Class 2.0 GLA45 AMG (Premium)', '/assets/DSC08313-1199x800.jpg', '£31,950', '', false)
    ];

    public getDealerPicks(): StockItem[] {
        return this.stock.filter(s =>  s.dealerPick === true);
    }

    public getOtherStock(maxNumber: number): StockItem[] {
        let i = 0;
        return this.stock.filter(s => {
            if (i > maxNumber + 1) { return false; }
            i++;
            return s.dealerPick === false;
        });
    }

}
