import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBGN0zZNotkhspzYde1_eMnN8C9qJdkljg',
    authDomain: 'trackertaxis-ef9b9.firebaseapp.com',
    databaseURL: 'https://trackertaxis-ef9b9.firebaseio.com',
    projectId: 'trackertaxis-ef9b9',
    storageBucket: 'trackertaxis-ef9b9.appspot.com',
    messagingSenderId: '812889912749'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5GzTdXrMwaqaRv93h-5Js7IiKYUZiItk'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name')
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
