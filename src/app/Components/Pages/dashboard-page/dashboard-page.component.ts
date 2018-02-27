import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../../../../environments/environment';
import { PackService } from '../../Services/pack.service';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  authenticated = false;
  dash;
  cars = true;
  results = false;
  images = false;


  constructor(
    public afAuth: AngularFireAuth,
    public packServ: PackService,
  ) {
    this.packServ.getDash().subscribe(pil => {
        this.dash = pil;
        this.checkDash();
      });}

  ngOnInit() {
    this.isSignedIn();
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut().then(this.isSignedIn);
    // this.authenticated = false;
  }
  isSignedIn() {
    this.afAuth.authState.subscribe(user => {
      if (!isNullOrUndefined(user)) {
        if (user.uid === environment.uid) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      } else {
        this.authenticated = false;
      }
    })
  }
  setDash(dash) {
    this.packServ.setDash(dash);
  }
  checkDash() {
    switch (this.dash) {
      case 'cars':
        this.cars = true;
        this.results = false;
        this.images = false;
        break;
      case 'results':
        this.cars = false;
        this.results = true;
        this.images = false;
        break;
      case 'images':
        this.cars = false;
        this.results = false;
        this.images = true;
        break;
    }
  }

}
