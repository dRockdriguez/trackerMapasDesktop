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
  siguiendo: string = null;
  siguiendoNombre: string = null;

  constructor(db: AngularFirestore) {
    db.collection('usuarios').valueChanges().subscribe((data: Tax[]) => {
      this.items = data;

      if (!this.init) {
        this.lat = data[0].lat;
        this.lng = data[0].lng;
        this.init = true;
      }

      if (this.siguiendo) {
        data.forEach(taxista => {
          if (taxista.clave === this.siguiendo) {
            this.lat = taxista.lat;
            this.lng = taxista.lng;
            this.siguiendoNombre = taxista.nombre;
          }
        });
      }
    });
  }

  seguir(tax: Tax) {
    this.siguiendo = tax.clave;
    this.siguiendoNombre = tax.nombre;
    this.lat = tax.lat;
    this.lng = tax.lng;
  }

  dejarSeguir() {
    this.siguiendo = null;
    this.siguiendoNombre = null;
  }
}

interface Tax {
  nombre: string;
  clave: string;
  lat: number;
  lng: number;
}
