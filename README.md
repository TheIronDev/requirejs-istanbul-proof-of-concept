# Testing FTW

The purpose behind this repo is to find out how to get istanbul code coverage on requirejs files.

## Requirements

```
npm install -g mocha
npm install -g istanbul
npm install
```

## Run Tests

```
mocha --reporter Spec
```

## Check Coverage

```
istanbul cover _mocha -- -R Spec;open coverage/lcov-report/index.html
```
