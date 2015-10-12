**Status:** Resolved as of https://github.com/eslint/eslint/commit/57bd7d274be1a9dff3b15f93de607623961162b7.

# eslint-indent-with-newlines

This test case is for a stylistic issue with ESLint's `indent` rule.

Specifically, when there are long lines that are wrapped with some patterns, the `indent` rule uses the wrong starting point to determine where indentation should start. The common case of this is when using Jasmine for tests.

```js
describe('something', function() {
  it('should have some specific behavior that takes lots of words to explain ' +
     'so we wrap to the next line', function() {
    // We expect indentation to be here
    expect(true);
  });
});
```

## Steps to Reproduce:

```sh
npm install
npm run lint
```

## Expected Results:

Lint Passes.

## Actual Results:

```
5:5  error  Expected indentation of 7 space characters but found 4  indent
6:3  error  Expected indentation of 5 space characters but found 2  indent
```

## Workarounds

Change the code style to not wrap at some specific number (and exclude `it` lines from a `max-len` rule). This is not desirable.

## Regression?

This pattern and same configuration worked with ESLint 1.0-1.4, but has been broken since 1.5.
