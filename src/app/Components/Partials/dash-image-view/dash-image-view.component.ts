import { Component, OnInit, Renderer } from '@angular/core';
import { Images } from '../../Models/images';
import { PackService } from '../../Services/pack.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-dash-image-view',
  templateUrl: './dash-image-view.component.html',
  styleUrls: ['./dash-image-view.component.css']
})
export class DashImageViewComponent implements OnInit {

  images: any;

  constructor(
    private packServ: PackService,
    private clip: ClipboardService,
    private render: Renderer,
  ) { }

  ngOnInit() {
    this.packServ.getImages().subscribe(pics => {
      this.images = pics;
      console.log('pics =', this.images);
    });
  }

  getSrc(image) {
    console.log('getSrc =', image.url);
    this.clip.copyFromContent(image.url);
  }

}
