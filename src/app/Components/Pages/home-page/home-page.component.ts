import { Component, OnInit } from '@angular/core';
import { PackService } from '../../Services/pack.service';
import { CarEntry } from '../../Models/car-entry';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  years = [];
  dens = ['All Dens'];
  carList = [];
  yearSelected = '2017';
  denSelected = 'All Dens';
  newCars;
  selectedCars = [];

  constructor(
    private packServ: PackService,
  ) { }

  ngOnInit() {
    this.packServ.getCars().subscribe((cars) => {
      this.carList = cars;
      for (let x = 0; x < cars.length; x++) {
        // this.years.push(cars[x].year);
        if (this.years.indexOf(cars[x].year) === -1) {
          this.years.push(cars[x].year);
        }
        if (this.dens.indexOf(cars[x].den) === -1) {
          this.dens.push(cars[x].den.toString());
        }
      }
    });
  }


  selectYear(year) {
    this.selectedCars = [];
    this.yearSelected = year;
    for (let x = 0; x < this.carList.length; x++) {
      if (this.carList[x].year ===  parseInt(year, 10)) {
        this.selectedCars.push(this.carList[x])
      }
    }
  }

  selectDen(den) {
    this.selectedCars = [];
    this.denSelected = den;
    for (let x = 0; x < this.carList.length; x++) {
      if (this.carList[x].year ===  parseInt(this.yearSelected, 10)) {
        if (this.denSelected === 'All Dens') {
          this.selectedCars.push(this.carList[x])
        } else {
          if (this.carList[x].den === this.denSelected) {
            this.selectedCars.push(this.carList[x])
          }
        }
      }
    }

  }

}
