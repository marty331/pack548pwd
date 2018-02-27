import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import 'materialize-css';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { HeaderComponent } from './Components/Partials/header/header.component';
import { ResultsPageComponent } from './Components/Pages/results-page/results-page.component';
import { RulesPageComponent } from './Components/Pages/rules-page/rules-page.component';
import { TemplatesPageComponent } from './Components/Pages/templates-page/templates-page.component';
import { PackService } from './Components/Services/pack.service';
import { MzButtonModule, MzInputModule, MzSelectModule , MzValidationModule, MzCardModule, MzCollectionModule } from 'ng2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DashboardPageComponent } from './Components/Pages/dashboard-page/dashboard-page.component';
import { DashImagesComponent } from './Components/Partials/dash-images/dash-images.component';
import { DashCarsComponent } from './Components/Partials/dash-cars/dash-cars.component';
import { DashResultsComponent } from './Components/Partials/dash-results/dash-results.component';
import { DashImageViewComponent } from './Components/Partials/dash-image-view/dash-image-view.component';
import { ClipboardModule } from 'ngx-clipboard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'rules',
    component: RulesPageComponent
  },
  {
    path: 'results',
    component: ResultsPageComponent
  },
  {
    path: 'templates',
    component: TemplatesPageComponent
  },
  {
    path: 'potato',
    component: DashboardPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ResultsPageComponent,
    RulesPageComponent,
    TemplatesPageComponent,
    DashboardPageComponent,
    DashImagesComponent,
    DashCarsComponent,
    DashResultsComponent,
    DashImageViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfire'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    MzCollectionModule,
    MzCardModule,
    FormsModule,
    PdfViewerModule,
    ClipboardModule,
  ],
  exports: [
    MzInputModule,
    MzValidationModule,
    MzSelectModule,
    MzValidationModule,
    MzCardModule,
    MzCollectionModule,
  ],
  providers: [PackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
