export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;    
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    location?: string;//attribut optionnelle
    
    //méthode 1:
    /*title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;

    constructor(_title: string, _description: string, _createdDate: Date, _snaps: number, _imageUrl: string){
        this.title=_title;
        this.description=_description;
        this.createdDate=_createdDate;
        this.snaps=_snaps;
        this.imageUrl=_imageUrl;
    }*/
    //méthode 2:
    /*constructor(public title: string, 
        public description: string, 
        public createdDate: Date, 
        public snaps: number, 
        public imageUrl: string,
        public location?: string){
    }*/
}