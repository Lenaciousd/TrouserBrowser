# Project Catwalk
## Hackreactor Frontend Capstone Project

![ProductOverview]

---
## Tech Stack

<code><img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"></code>

### React
- We utilized React Context and Hooks in order to dynamically render data fetched from a third-party API as a single-page application.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></code>

### Node.js
- Node was used as our javascript runtime environment.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"></code>

### Express
- Express framework was used to simplify using our node implementation, to run authentication and direct routes to Atelier API.

<code><img width="15%" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"></code>

### Vite.js
- We utilized vite as a bundler to optimize efficiency and transpile our web app.

<code><img width="15%" src="https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white"></code>

### Circle CI
- Circle CI was used for continuous integration.

<code><img width="15%" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"></code>

### AWS
- We utilized AWS as our cloud server which allowed for convenient deployment of our web app.

<br>

## To run development:
1. install dependencies
```bash
npm install
```

```bash
npm run dev
```

```bash
npm run devVite
````

Vite server is at [localhost:3000](http://localhost:3000)<br >
Node server is at [localhost:3001](http://localhost:3001)

Create a config.js using the format of config.example.js with your github api token in the root directory<br >
Create a filestack.config.js based off the format of filestack.config.example.js located in src/Components/Reviews and add in a filestack api token<br >

## To run prod:
Create bundle with:<br >
 ```bash
npm run build
```

Then run in two screens:<br >
 ```bash
npm run prod:node
```
 ```bash
npm run prod:vite
```

## Widget Owners:
Product Overview : Developed By [Lenora Esquenazi](https://github.com/Lenaciousd)<br >
Related Products: Developed by [Cora Durham](https://github.com/Cora-Du)<br >
Questions & Answers: Developed by [Matthew Boyle](https://github.com/matthewtboyle)<br >
Reviews : Developed by [Jesus Gonzales](https://github.com/JGon26)<br >

<!-- images -->
[ProductOverview]: src/assets/TrouserBrowserProductOverview.png