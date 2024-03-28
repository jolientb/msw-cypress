import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

environment



  async function prepareApp() {
    if (isDevMode()) {
      console.log('isDev')
      // const { worker } = await import('./mocks/browser')
      // return await worker.start()
    }

    return Promise.resolve()
  }

  prepareApp().then(() => {
    bootstrapApplication(AppComponent, {
      providers: [provideHttpClient()],
    })
  })
