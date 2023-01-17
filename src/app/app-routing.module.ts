import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

//tableau de ttes les route de l'app => routee principale
const routes: Routes = [
    //route facesnap qui correspond à l'affichage de faceSnapList
    //path => URL
    //Component => le component qui convient
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {

}