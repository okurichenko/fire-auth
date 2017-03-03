/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fire-auth',
    podModulePrefix: 'fire-auth/pods',
    environment: environment,
    rootURL: '/demo',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    torii: {
      sessionServiceName: 'session'
    },
    // ...
    firebase: {
      apiKey: "AIzaSyB5htWTTwFBhcSrDcQQPZ_NCKAzLy0X-XE",
      authDomain: "ember-app-d502d.firebaseapp.com",
      databaseURL: "https://ember-app-d502d.firebaseio.com",
      storageBucket: "ember-app-d502d.appspot.com",
      messagingSenderId: "546785880099",
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
