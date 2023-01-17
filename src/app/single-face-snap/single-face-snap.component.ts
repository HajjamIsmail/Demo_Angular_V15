import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  btnText!: string;

  //Injecter notre service :
  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.btnText='Snap';
    //récuperer id
    //+ permet de transformer une chaine en number
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.btnText==='Snap'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'Snap');
      this.btnText='UnSnap';
    }
    else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'UnSnap');
      this.btnText='Snap';
    }
  }
}
