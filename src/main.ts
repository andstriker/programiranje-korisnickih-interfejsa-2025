import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//@ts-ignore
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free'

bootstrapApplication(App, appConfig) //bootstrap ovdje nema veze sa BS css
  .catch((err) => console.error(err));
