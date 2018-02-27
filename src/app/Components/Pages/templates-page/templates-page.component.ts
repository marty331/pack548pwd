import { Component, OnInit } from '@angular/core';
import { PackService } from '../../Services/pack.service';
import { Templates } from '../../Models/templates';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-templates-page',
  templateUrl: './templates-page.component.html',
  styleUrls: ['./templates-page.component.css']
})
export class TemplatesPageComponent implements OnInit {

  templates = [];
  // links = [];
  selectedTemplate = "assets/template1.pdf";

  constructor(
    private packServ: PackService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    // this.packServ.getTemplates().subscribe(temps => {
    //   console.log('templates =', temps);
    //   this.templates = temps;
    //   for (let x = 0; x < this.templates.length; x++) {
    //     console.log('link =', this.templates[x].url);
    //     this.links.push(this.templates[x].url);
    //   }
    //   console.log('links =', this.links);
    // })
    for (let x = 1; x <= 15; x++) {
      this.templates.push(  x );
    }
  }

  photoURL(template) {
    this.selectedTemplate = "assets/template" + template  + ".pdf";
  }

}
