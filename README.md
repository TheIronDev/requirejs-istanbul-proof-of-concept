# Istanbul Code Coverage with Requirejs

The purpose behind this repo is to find out how to get istanbul code coverage on requirejs files.

## Requirements

```
npm install -g mocha
npm install -g istanbul
npm install
```

## Run Tests

```
mocha --reporter Spec test/**/*.js
```

## Check Coverage

```
istanbul cover --hook-run-in-context _mocha -- -R Spec test/**/*.js;open coverage/lcov-report/index.html
```

**Few requirements found:**
* Boiler plate is not required here, instead we need to include the `--hook-run-in-context` option
