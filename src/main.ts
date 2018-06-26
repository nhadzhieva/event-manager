import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


const config: Kinvey.ClientConfig = {
    appKey: 'kid_H11mjwE-Q',
    appSecret: 'f15aaff4aedc4060be49c9afefa38a1e'
  };
 const client = Kinvey.init(config);

 const activeUser = Kinvey.User.getActiveUser(client);

  if (!activeUser) {
     const promise = Kinvey.User.signup()
          .then(function(user) {
              loadDataStore();
          }).catch(function(error) {
              console.log(error);
          });
          }  else {
      loadDataStore();
  }
  function loadDataStore() {
      const dataStore = Kinvey.DataStore.collection('events');
      dataStore.pull()
          .then(function(regions) {
          })
          .catch(function(error) {
              console.log(error);
          });
}
