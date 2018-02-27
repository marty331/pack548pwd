import {Component, OnInit, ViewChild} from '@angular/core';
import { CarEntry } from '../../Models/car-entry';
import { PackService } from '../../Services/pack.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../../../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dash-cars',
  templateUrl: './dash-cars.component.html',
  styleUrls: ['./dash-cars.component.css']
})
export class DashCarsComponent implements OnInit {

  myModelChanged: string;
  title: string;
  description: string;
  blogPosted = false;
  enteredDate: Date;

  car: Car = {
    name: '',
    scout: '',
    carNumber: '',
    pic: '',
    den: ''
  }

  carEntry: CarEntry = {
    year: 0,
    name: '',
    scout: '',
    carNumber: '',
    pic: '',
    den: ''

  }



  constructor(
    public auth: AngularFireAuth,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private packServ: PackService,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('car =', this.carEntry);
    this.packServ.addCar(this.carEntry);
  }

}

class Car {
  id?: string;
  den?: string;
  name?: string;
  carNumber?: string;
  scout?: string;
  pic?: string;
}
