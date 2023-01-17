import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps! : FaceSnap[];

  //injection des dépendances
  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void{
    //récuperer tableau faceSnaps
    this.faceSnaps = this.faceSnapsService.GetAllFaceSnaps();
  }
}
