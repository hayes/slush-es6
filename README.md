# slush slush-es6

A template for writing es6 modules without checking in compiled source.
The module will be initialized with a browser key, and a `browserify` transfrom
for `webpack` and `browserify` compatibility, and can be directly required from
node without the need for a transform.  These modules can be consumed by any
`node` or `browserify`. For use with `webpack`, the `webpack` config must
specify how to load files with `.es6` and/or `.jsx` extensions.  Using
`slush es6:app` will generate a `webpack.config.js` file that includes the
necessary loader.

## Installation

```
npm install -g slush slush-es6
```

## Ussage

To generate an `es6` module:
```
slush es6:module
```

To generate an app that consumes an es6 module that works with node,
`browserify` and `webpack`
```
slush es6:app
```

#license

### ISC
