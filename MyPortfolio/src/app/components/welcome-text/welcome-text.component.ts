import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.css']
})
export class WelcomeTextComponent implements OnInit {
  breakpoint: any;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }

}
