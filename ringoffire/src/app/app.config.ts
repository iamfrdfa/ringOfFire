import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';


export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideFirebaseApp(() => initializeApp({
            projectId: "ring-of-fire-5b424",
            appId: "1:894219521721:web:93aa84e6a6a087f76c9568",
            storageBucket: "ring-of-fire-5b424.firebasestorage.app",
            apiKey: "AIzaSyBAM6IN4aKUbswF-7lOeIGpeeKeJEjOqrs",
            authDomain: "ring-of-fire-5b424.firebaseapp.com",
            messagingSenderId: "894219521721"
        })),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
