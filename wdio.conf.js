var debug = false;
var fs = require("fs");


exports.config = {
 debug: debug, specs: debug ? ['tests/tests/discover.test.js'] :['tests/tests/*.js'],
 maxInstances: debug ? 1 : 4,
 capabilities: [{
  maxInstances: 4,
  browserName: 'chrome',
     chromeOptions: {
     args: [
         // "--start-maximized", "--start-fullscreen",
         // "--no-startup-window"
         ]},
  browserName: 'geckodriver',
     geckodriverOptions: {
       args: [
	       "--start-maximized", "--start-fullscreen",

       ]
     }
  }],

 sync: true,
 logLevel:  'verbose',
 coloredLogs: true,
 bail: 0,
    screenshotOnReject: false,
 screenshotPath: false,
 // screenshotPath: 'screenshots',
 //    screenshotOnReject: {
 //        connectionRetryTimeout: 30000,
 //        connectionRetryCount: 0
 //    },
 baseUrl: 'https://vscale.io/',
 waitforTimeout: debug ? 99999999 : 100000,
 connectionRetryTimeout: debug ? 99999999 : 100000,
 connectionRetryCount: 3,
 framework: 'mocha',
 mochaOpts: {
  ui: 'bdd',
  timeout: debug ? 99999999 : 900000
 },
 services: ['selenium-standalone'],
 // reporters: [ 'teamcity'],
 // reporters: ['dot', 'allure', 'teamcity'],
 reporters: ['dot', 'teamcity'],
 // reporterOptions: {
 //  allure: {
 //   outputDir: 'allure-results'
 //  }
 // }
};