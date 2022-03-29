# LaserHub
## Quality Engineer - Take Home Assignment

### Project Description
For this take home assignment I've decided to create a [Cypress](https://example.cypress.io/) testing framework.
I've tryed to solve this challenge withing 1-2 hours as proposed in the pdf document. Given that, I left beheind some  scenarios like asserting all the field validation messages, but I'm more than happy to discuss them further in the interview process.
Also given the reduced complexety and dimention of this test framework I've decided not to use POM , but again , I'm more than happy to discuss it or even implement it during the following stages of the interview process.


### Install and Run the Project
After cloning the repo:

In order to protect sensitive data, create a `cypress.env.json` file in the project root file.
Inside the file we need to add the user credentials ; email and password:
```
{
  "user_name": "example@email",
  "user_password": "examplePassword"
}
```

Run the command to install the project:
`$ npm install`

Run the command to run the project: 
`$ npm run test`

Run the command to open Cypress dashboard and trigger the tests manually:
`$ npx cypress run`

Run the follwing commands to build and run the frameworkd through docker container:
`$ docker build -t anyContainerName .`

`$ docker run -p 8080:8081 anyContainerName`


This project requires [Node.js](https://nodejs.org/) v14+ or Docker if you run it in a container.

### Improvements 

Nothing is final and everything can be improved. 
Given the time to deliver this project was limitted, I also wanted to refer some points I think that I could add and Improve:

- Make it work with ross-browser
- Create a CI or workflow
- Add Visual Regression Tests
- Extend the Scenarios coverage as mentioned above
