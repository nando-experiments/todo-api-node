# TODO App API RESTFUL

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependecies](#dependecies)
- [Dev dependecies](#dev-dependecies)
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


## Support

Please [open an issue](../../issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](../../compare?expand=1).
Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## History

See [Releases](../../releases) for detailed changelog.

## Author

| [![twitter/oseunando](https://avatars6.githubusercontent.com/u/1318271?v=4&s=120)](http://twitter.com/oseunando "Follow @oseunando on Twitter") |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Fernando Moreira](http://twitter.com/oseunando)                                                                                                |

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Code is under [MIT License](/LICENSE) - © Fernando Moreira

## Buy me a coffee?

It will encourage me to keep it going, fix whatever bugs you find and spend time making it better :D

<a href="https://www.paypal.me/nandomoreira/5">
  <img src="https://img.shields.io/badge/Buy%20me%20a%20coffee%3F-US%24%205-blue.svg" alt="Buy me a coffee? - https://www.paypal.me/nandomoreira/5">
</a>
