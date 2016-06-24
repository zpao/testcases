**Status:** Radar ~~26982554~~ 19834542 (open as of 2016-06-24)

# safari-html-comment-clipboard

This test case demonstrates that Safari copies the text content of HTML comments to the clipboard, in most formats. `public.utf8-plain-text` does not contain the comments and is used by most applications when handling paste. However some applications, including Apple's own Messages app, and TextEdit (in RTF documents) read from another formatthat contains the comment.

The included `index.html` demonstrates the issue, as does some simple markup.

```html
<div>hello <!-- html comment --> world</div>
```

The following data URI can also be used (copy & paste into location bar):

```
data:text/html,<div>hello <!-- html comment -->world</div>
```

## Inspecting the clipboard

Pasting into applications only shows so much. You can use one of Apple's own sample applications to view clipboard contents in multiple formats. Download and build [ClipboardViewer](https://developer.apple.com/library/mac/samplecode/ClipboardViewer/Introduction/Intro.html).

## Other Sources

- Originally found in [a React issue](https://github.com/facebook/react/issues/7106)
