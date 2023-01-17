import {Injectable} from '@angular/core'
import { FaceSnap } from '../models/face-snap.models'

@Injectable({
    //dit à angular d'enregistrer ce service à la racine de l'app
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Angular',
            description: 'Test Description pour injection Angular',
            createdDate: new Date(),
            snaps: 100,
            imageUrl: './assets/img/Angular.png',
            location: 'Meknes'
          },
          {
            id: 2,
            title: 'JEE',
            description: 'Test Description pour injection JEE',
            createdDate: new Date(),
            snaps: 150,
            imageUrl: './assets/img/JEE.png',
            location: 'Casablanca'
          },
          {
            id: 3,
            title: 'ASP.NET',
            description: 'Test Description pour injection ASP.NET',
            createdDate: new Date(),
            snaps: 200,
            imageUrl: './assets/img/ASP.png',
            location: 'Rabat'
          }
    ];

    GetAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(id:number):FaceSnap{
        const fSnaps = this.faceSnaps.find(f => f.id === id);
        if(!fSnaps) {
            throw new Error("FaceSnaps not found !");
        } else {
            return fSnaps;
        }
    }

    snapFaceSnapById(id: number, snapType: 'Snap' | 'UnSnap'): void{//type literal => forcer le input
        const faceSnap = this.getFaceSnapById(id);
        snapType === 'Snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}