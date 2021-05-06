// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GITHUB_PRIVATE_KEY: './marekpantistest.2021-05-05.private-key.pem',
  WEBHOOK_PROXY_URL: 'https://smee.io/TAwa6hNf7Vm5b8E4',
  GITHUB_WEBHOOK_SECRET: '494d9fb0dc2a363baf71a5cb3dd0f0302d7f848f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// const SmeeClient = require('smee-client')

// const smee = new SmeeClient({
//   source: 'https://smee.io/TAwa6hNf7Vm5b8E4',
//   target: 'http://localhost:3000/events',
//   logger: console
// })

// const events = smee.start()

// // Stop forwarding events
// events.close()

// 494d9fb0dc2a363baf71a5cb3dd0f0302d7f848f secret