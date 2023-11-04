# shift-challenge

## Running tests

To run tests, first clone the repo.<br>
Install cypress `npm install cypress --save-dev`<br>
If not already installed, download chromium `https://download-chromium.appspot.com/` *This link is not for an M1 mac*<br>
To be able to open chronium, go to the finder, right click on chronium and click open<br>
Run tests `npm run cy:run:chromium`

## About the tests

For this code challenge I decided to go with Cypress.io. I am most familiar with Cypress and I know that the reporting and chronium are easy to setup. The tests are pretty straightforward, test 1 validates that the url is redirecting to `www.` and test 2 clicks on careers and validates that the `Lead QA Automation Developer` is visible. Since the tests were pretty small, I didn't see the need to add any commands or fixtures. I did set the baseUrl which is set in the `cypress.config` file. While the same affect of removing duplicate code could be reached by adding the `cy.visit` command in the before each, using baseUrl is a better practice since as the test suite grows and where it run grows, baseUrl will be needed. I also configured the run command to use chronium and close / report on test completion. These are functionalities built into cypress, but not on by default. The code for that can be found under scripts in `package.json`.<br>

For this challenge I decided to use app actions model instead of page objects. While i am not completely apposed to page objects, I have found that as a test suites grows it can get a bit bloated with all the pages and then all the pages you need to bring in for each test. So, for Cypress, I prefer app actions.<br>

If you would like to take a closer look at the test running you can run `npx cypress open` this will open Cypress in a headed browser and keep the browser open instead of closing right away.<br>

You should be able to run each of the tests in any order you wish. They are not dependent on each other.
