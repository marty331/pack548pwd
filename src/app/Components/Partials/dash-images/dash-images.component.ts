import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { PackService } from '../../Services/pack.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Images } from '../../Models/images';

@Component({
  selector: 'app-dash-images',
  templateUrl: './dash-images.component.html',
  styleUrls: ['./dash-images.component.css']
})
export class DashImagesComponent implements OnInit {

  @Input() folder: string;

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;
  imageUrl;

  // State for dropzone CSS toggling
  isHovering: boolean;

  metaData = {};

  constructor(
    // public af: AngularFireDatabase,
    public auth: AngularFireAuth,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private packServ: PackService,
  ) {
    // firebase.initializeApp(environment.firebase);
  }

  ngOnInit() {
    // const storage = firebase.storage().ref();
    // console.log('storage =', storage);


  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const fileName = `${new Date().getTime()}_${file.name}`;
    const path = 'pics/' + fileName;

    // Totally optional metadata
    const customMetadata = { app: 'pack548' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap);
        if (snap['bytesTransferred'] === snap['totalBytes']) {
          // Update firestore on completion
          this.db.collection('images').add( { path, size: snap['totalBytes'] });
        }
      })
    );


    // The file's download URL
    this.downloadURL = this.task.downloadURL();
    this.downloadURL.subscribe(i => {
      const image: Images  = {
        url: i,
        metaData: JSON.stringify({name: fileName}),
      };
      this.imageUrl = i;
      this.packServ.addImage(image);
    });


  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
