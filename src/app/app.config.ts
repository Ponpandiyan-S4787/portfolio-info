import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './smart/data-access/+states/todo.reducer';
// fire store
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage} from '@angular/fire/storage'
import { environment } from '../environment';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ todo: todoReducer }),
    provideEffects(),
    // toastr
    provideHotToastConfig(),
    // firebase
    provideFirestore(() => getFirestore()),
    provideStorage(()=>getStorage()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
};
