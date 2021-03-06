# YATA - Yet Another Todo App

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/tahkojuusto/yata)

This is a test todo app in order to test the following technologies:

- React + Redux
- Amplify + AppSync
- GraphQL

The app supports user sign up and sign in. Moreover, each user has private todo tickets hidden from other users.

![Architecture](yata.png?raw=true 'Architecture')

## Setup

Install the app and its dependencies

```
yarn install
```

Start local development against the dev backend (GraphQL + Cognito)

```sh
amplify env checkout dev
yarn start
```

Run tests using the following commands

```sh
# Unit tests
yarn test

# e2e tests using Cypress
yarn start & yarn cypress:open
```

## CI/CD

The CI/CD pipeline has been defined in file `amplify.yml`. It runs the following:

- install dependencies
- optimized build
- run unit tests and e2e tests
- deploy static files (front-end)
- deploy backend (GraphQL + Cognito)

## Screenshots

![ss1](screenshots/frontend_pipelines.png?raw=true 'Frontend pipelines')
![ss2](screenshots/responsive_validation.png?raw=true 'UI validation')
![ss3](screenshots/backends.png?raw=true 'Backends')
![ss4](screenshots/appsync_schema.png?raw=true 'GraphQL')
![ss5](screenshots/cognito.png?raw=true 'Cognito')
![ss6](screenshots/dynamodb.png?raw=true 'DynamoDB')
![ss7](screenshots/e2e_tests.png?raw=true 'Cypress tests')
