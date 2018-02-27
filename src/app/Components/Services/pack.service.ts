import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CarEntry } from '../Models/car-entry';
import { Templates } from '../Models/templates';
import { Images } from '../Models/images';

@Injectable()
export class PackService {

  carCollections: AngularFirestoreCollection<CarEntry>;
  cars: Observable<CarEntry[]>;
  carDoc: AngularFirestoreDocument<CarEntry>;

  templateCollections: AngularFirestoreCollection<CarEntry>;
  templates: Observable<Templates[]>;
  tempDoc: AngularFirestoreDocument<Templates>;

  imageCollections: AngularFirestoreCollection<Images>;
  images: Observable<Images[]>;
  imageDoc: AngularFirestoreDocument<Images>;

  dashboard = new BehaviorSubject<String>('cars');

  constructor(
    public afs: AngularFirestore,
  ) {
      this.carCollections = this.afs.collection('cars');
      this.cars = this.carCollections.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as CarEntry;
          data.id = a.payload.doc.id;
          return data;
        })
      });
      this.templateCollections = this.afs.collection('templates');
      this.templates = this.templateCollections.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Templates;
          data.id = a.payload.doc.id;
          return data;
        })
      })
      this.imageCollections = this.afs.collection('images');
      this.images = this.imageCollections.snapshotChanges().map(changes => {
        console.log('images =', changes);
        return changes.map(a => {
          const data = a.payload.doc.data() as Images;
          data.id = a.payload.doc.id;
          return data;
        })
      });
    }

    getTemplates() {
      return this.templates;
    }

  getCars() {
    return this.cars;
  }

  getImages() {
    console.log('getImages =', this.images);
    return this.images;
  }

  addTemplate(template: Templates) {
    this.templateCollections.add(template);
  }

  addImage(image: Images) {
    this.imageCollections.add(image);
  }

  addCar(car: CarEntry) {
    this.carCollections.add(car);
  }

  deleteTemplate(template: Templates) {
    this.tempDoc = this.afs.doc(`templates/${template.id}`);
    this.tempDoc.delete();
  }

  deleteCar(car: CarEntry) {
    this.carDoc = this.afs.doc(`cars/2017/${car.id}`);
    this.carDoc.delete();
  }

  updateTemplate(template: Templates) {
    this.tempDoc = this.afs.doc(`templates/${template.id}`);
    this.tempDoc.update(template);
  }

  updateCar(car: CarEntry) {
    this.carDoc = this.afs.doc(`cars/2017/${car.id}`);
    this.carDoc.update(car);
  }

  setDash(dash) {
    this.dashboard.next(dash);
  }

  getDash(): Observable<any> {
    return this.dashboard.asObservable();
  }
}
