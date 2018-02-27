import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.css']
})
export class RulesPageComponent implements OnInit {
  innerWidth

  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 768) {
      return 'container';
    } else {
      return '';
    }

  }

}
