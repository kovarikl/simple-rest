# Simple REST API server

Simple example REST API server based on Node.js and Express.js. Runs on `localhost:3000`. Endpoints are defined in `src/index.js`.

## Endpoints

### POST /keylogger
Prints `id` and `keystroke` from body of message to console.

Example body:
```json
{
  "id": 1,
  "keystroke": "a"
}
```

## First setup
Clone repository:
``` bash
$ git clone https://github.com/kovarikl/simple-rest.git
```
Install `npm` modules:
```bash
$ cd simple-rest
$ npm install
```

## Starting server
```bash
$ npm run start
```

## License
Licensed under Apache License 2.0
