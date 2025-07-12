import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import React from 'react';
window.React = React;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import localeEs from '@angular/common/locales/es';
import { DatePipe, registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          // eslint-disable-next-line no-constant-binary-expression
          darkModeSelector: false || 'none',
          cssLayer: {
            name: 'primeng',
            order: 'primeng, app-styles, another-css-library',
          },
        },
      },
    }),

    { provide: LOCALE_ID, useValue: 'es' },
    DatePipe,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
