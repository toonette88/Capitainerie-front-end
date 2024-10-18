import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor, TokenInterceptorProvider } from './_helpers/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers:[
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    TokenInterceptorProvider,
    provideRouter(routes), 
    provideClientHydration(), 
   

]};
