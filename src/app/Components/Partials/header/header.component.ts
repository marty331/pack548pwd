import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.currPos = (window.pageYOffset || event.target.scrollTop) - (event.target.clientTop || 0);
    this.isScrolled = (this.currPos >= this.changePos);
  }

}
