run following commands to setup project:
1. npm install

2. selenium install:
npm run setup-test_selenium_install

3. Start test
npm test

if you used headless start
npm run setup-test_selenium_start_xvfb-run

___________________________________________________________________

run one test setting on wdio.conf:
specs: [        
        'tests/tests/song.add.test.js'
____________________________________________________________________
for debug used 
        browser.debug(); 
into test instead of break point
and run user DEBUG=true on wdio.conf
____________________________________________________________________
Old setting:
    "selenium-standalone": "^6.0.1"
    
____________________________________________________________________
selector: http://webdriver.io/guide/usage/selectors.html#Name-Attribute
timeout: http://webdriver.io/guide/testrunner/timeouts.html#Selenium-timeouts
selenium: http://getinstance.info/articles/tools/ui-tests-with-webdriver-io/

    