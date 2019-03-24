# TODO App API RESTFUL

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Support](#support)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## Installation

- Clone this repo: `git clone https://github.com/nando-experiments/todo-api-node.git && cs ./todo-api-node`
- Install dependencies: `yarn install # or npm install`
- Start your mongodb: `mongod`
- Start this application: `yarn dev # or npm run dev`

## Usage

### Resources

**Request**

```
GET /
```

**Example:**

```sh
curl -X GET http://localhost:3003/api/todos
```

**Return data with all motivational quotes**
```json
[
  {
    "done": false,
    "_id": "5c97bc4d1524badf255f5277",
    "description": "nonn ononono non no onononono",
    "createdAt": "2019-03-24T17:20:13.972Z",
    "__v": 0
  },
  {
  ...
]
```


## Dependecies

- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
- [express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework
- [mongoose](https://github.com/Automattic/mongoose) - Mongoose MongoDB ODM
- [node-restful](https://github.com/baugarten/node-restful) - A library for making REST API's in node.js with express
- [pm2](https://github.com/Unitech/pm2) - Production process manager for Node.JS applications with a built-in load balancer.

## Dev dependecies

- [nodemon](https://github.com/remy/nodemon) - Simple monitor script for use during development of a node.js app.
