import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  ngOnInit(){
      this.mySnap = new FaceSnap(
        'TestInject',
        'Test Description pour injection',
        new Date(),
        6,
        './assets/img/images.png',
      );
  }
}
