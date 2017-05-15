# webpack-resolve

This test case demonstrates an issue with webpack's `resolve` configuration. When used, packages are resolved to the file they are required from if the file is named the same as the package.

For example, given this:
```
.
├── lib
│   └── Dots.js
└── node_modules
    └── dots
        └── index.js
```

where `lib/Dots.js` is simply:

```js
module.exports = require('dots');
```

There will be warnings about module names matching but different only by case: `There are multiple modules with names that only differ in casing.`. This is wrong but due to how resolution happened, is expected. Even if you fix the warning and make your local file `dots.js`, the final bundle is incorrect and will be missing the `dots` package.


## Repro:

```
npm install
npm run build
```

This will demonstrate the case warning and bad package. Removing the `resolve` property from `webpack.config.js` will fix everything.


## Original report:

This began as a bug reported in `fbjs` and took a little while to determine the root cause. See https://github.com/facebook/fbjs/issues/234
