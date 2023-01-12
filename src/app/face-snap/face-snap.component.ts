import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
//OnInit => interface
//Input  => faire appel à un décorateur => @Input

@Component({
  selector: 'app-face-snap',//corespond le selector => nom de la balise qui référencie notre component
  templateUrl: './face-snap.component.html',//url de notre template (page html)
  styleUrls: ['./face-snap.component.scss']//url de style du template
})
export class FaceSnapComponent implements OnInit {//! promettre à typeScript qu'on va les initialiser => vue qu'on utilise le typage strict afin d'eviter que les attributs soit undefined
  //créez proprieté personnalisé à l'aide d'un décorateur @Input
  @Input() faceSnap!: FaceSnap;
  btnText!: string;

  //pour intialiser ces propriété en suivant les best practices Angular => notre class doit implementer l'interface "OnInit"
  //cette méthode est appelé automatiquement par Angular au moment de la création de chaque instance du component => pr initiliser les propriété de la class
  ngOnInit(){
    this.btnText='Snaps';
  }

  //Function for Snaps=> add snaps :
  //methode qui commence par 'on' => signale que cette methode répond à un event
  onSnap(){
    if(this.btnText==='Snaps'){
      this.faceSnap.snaps++;
      this.btnText='UnSnap';
    }
    else{
      this.faceSnap.snaps--;
      this.btnText='Snaps';
    }
  }
}
