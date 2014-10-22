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

**Notes:**
* Code coverage does not appear to work with istanbul or blanketjs.
* Out of the box, untested files are not included.

