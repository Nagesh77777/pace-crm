import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),

    MessageService

  ]
};
