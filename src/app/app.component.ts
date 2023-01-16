import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps! : FaceSnap[];
  ngOnInit(){
      this.faceSnaps = [
      {
        title: 'Angular',
        description: 'Test Description pour injection Angular',
        createdDate: new Date(),
        snaps: 100,
        imageUrl: './assets/img/Angular.png',
        location: 'Meknes'
      },
      {
        title: 'JEE',
        description: 'Test Description pour injection JEE',
        createdDate: new Date(),
        snaps: 150,
        imageUrl: './assets/img/JEE.png',
        location: 'Casablanca'
      },
      {
        title: 'ASP.NET',
        description: 'Test Description pour injection ASP.NET',
        createdDate: new Date(),
        snaps: 200,
        imageUrl: './assets/img/ASP.png',
        location: 'Rabat'
      }
    ];
  }
}
