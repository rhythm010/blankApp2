import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FlexLayoutModule } from '@angular/flex-layout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

var fireBaseConfig = {
  apiKey: "AIzaSyA71no5kd9zNH1K6j9sMcxf2bd0FGA0POQ",
  authDomain: "firestoreproject-8c904.firebaseapp.com",
  databaseURL: "https://firestoreproject-8c904.firebaseio.com",
  projectId: "firestoreproject-8c904",
  storageBucket: "",
  messagingSenderId: "303572473550"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFirestoreModule,
    FlexLayoutModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
