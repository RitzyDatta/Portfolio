import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fade1', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(2000)),
    ]),

  ]
})
export class AboutComponent implements OnInit {
  breakpoint: any;
  colsp: any;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;
    this.colsp = (window.innerWidth <= 500) ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
    this.colsp = (window.innerWidth <= 500) ? 1 : 3;
  }

}
