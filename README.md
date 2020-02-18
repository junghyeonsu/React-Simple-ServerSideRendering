# React-router
서버 사이드 렌더링(Node.js, MySQL, React)


### client

package.json
```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy" : "http://localhost:5000/"
}

```

### server

package.json

```
{
  "name": "management",
  "version": "1.0.0",
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.2",
    "yarn": "^1.22.0"
  },
  "devDependencies": {
    "concurrently": "^4.0.1"
  },
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "description": ""
}

```
