import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations';

@Component({
  selector: 'dmb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
        state('in', style({
          marginTop: -100
        })),
        state('out', style({

        })),
        transition('in=>out', animate('250ms')),
        transition('out=>in', animate('0ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', { static: true }) public header: ElementRef;
  public fade = true;

  @HostListener('window:scroll', ['$event'])
    onScroll(event: any): void {
      this.fade = window.pageYOffset === 0;
    }

  constructor() { }

  ngOnInit() {
  }

}
