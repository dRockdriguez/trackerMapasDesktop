import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  items: Tax [] = [];
  init = false;

  constructor(db: AngularFirestore) {
    db.collection('usuarios').valueChanges().subscribe((data: Tax[]) => {
      this.items = data;

      if (!this.init) {
        this.lat = data[0].lat;
        this.lng = data[0].lng;
        this.init = true;
      }
    });
  }
}

interface Tax {
  nombre: string;
  clave: string;
  lat: number;
  lng: number;
}
