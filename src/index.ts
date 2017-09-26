import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import './styles.css'

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.log(err));