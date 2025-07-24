import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideRouter } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideHttpClient(),
    // provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes),
    // provideHttpClient(),
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAuth(() => getAuth()),
    provideRouter(routes), // Если есть маршрутизация
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig, "assist")),
    provideAuth(() => getAuth(getApp("assist"))),
    provideFirestore(() => getFirestore())
  ]
};
