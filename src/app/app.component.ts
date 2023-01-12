import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  SnapAngular!: FaceSnap;
  SnapJEE!: FaceSnap;
  SnapASP!: FaceSnap;
  ngOnInit(){
      this.SnapAngular = new FaceSnap(
        'Angular',
        'Test Description pour injection Angular',
        new Date(),
        6,
        './assets/img/Angular.png',
      );
      this.SnapJEE = new FaceSnap(
        'JEE',
        'Test Description pour injection JEE',
        new Date(),
        6,
        './assets/img/JEE.png',
      );
      this.SnapASP = new FaceSnap(
        'ASP.NET',
        'Test Description pour injection ASP.NET',
        new Date(),
        6,
        './assets/img/ASP.png',
      );
  }
}
