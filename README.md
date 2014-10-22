# Node-Define Example

The purpose behind this repo is to find out how to get istanbul code coverage on requirejs files.

## Requirements

```
npm install -g mocha
npm install -g istanbul
npm install
```

## Run Tests

```
mocha -r node-define --reporter Spec
```

## Check Coverage (does not work on clientside files :( )

```
istanbul cover _mocha -- -r node-define  -R Spec;open coverage/lcov-report/index.html
```

**Few Notes:**
* Does not work on clientside files :(
