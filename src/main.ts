import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

  async function prepareApp() {
    if (isDevMode()) {
      const { worker } = await import('./mocks/browser')
      return worker.start()
    }

    return Promise.resolve()
  }

  prepareApp().then(() => {
    bootstrapApplication(AppComponent, {
      providers: [provideHttpClient()],
    })
  })
