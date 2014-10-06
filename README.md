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

**Few requirements found:**
* `if (typeof define !== 'function') { var define = require('amdefine')(module) }` must be added on the very top of amd files.
* Out of the box, untested files are not included.

**Whats left:**
[ ] Provide 0% for all untested files
[ ] Include a file that requires other modules in the define block.