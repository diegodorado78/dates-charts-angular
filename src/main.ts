import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//custom LIT web components
import { BcoComponent } from './app/pages/home/components/bco-trial/bco-component';
import{BcoComponent2} from './app/pages/home/components/bco-trial2/bco-component2';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//define the web components
  customElements.define('bco-component', BcoComponent);
  customElements.define('bco-component2', BcoComponent2);