import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

const firebaseConfig = {
    projectId: "ring-of-fire-5b424",
    appId: "1:894219521721:web:93aa84e6a6a087f76c9568",
    storageBucket: "ring-of-fire-5b424.firebasestorage.app",
    apiKey: "AIzaSyBAM6IN4aKUbswF-7lOeIGpeeKeJEjOqrs",
    authDomain: "ring-of-fire-5b424.firebaseapp.com",
    messagingSenderId: "894219521721"
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        importProvidersFrom(
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestoreModule
        ),
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase())
    ]
};

