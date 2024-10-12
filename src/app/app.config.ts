import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { DefaultInterceptor } from './Services/default.Interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),

    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
  ],
};
