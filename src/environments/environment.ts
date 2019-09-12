// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC72cSjozkeZfzjnPw6ASJFwjGwpLAb9kU',
    authDomain: 'cars-bf4a0.firebaseapp.com',
    databaseURL: 'https://cars-bf4a0.firebaseio.com',
    projectId: 'cars-bf4a0',
    storageBucket: 'gs://cars-bf4a0.appspot.com/',
    messagingSenderId: '657878919636',
    appId: '1:657878919636:web:6d03bfeb0b427986'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
