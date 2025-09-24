import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//@ts-ignore
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.css';

bootstrapApplication(App, appConfig) //bootstrap ovdje nema veze sa bs css
  .catch((err) => console.error(err));
