Radium Arrow Render Issues
==========================

Experiments for Radium issue: https://github.com/FormidableLabs/radium/issues/738

## Experiment

- [`method-render.js`](src/method-render.js) - Works. Method-based `render`.
- [`arrow-render.js`](src/arrow-render.js) - Works. Arrow function-based `render`.

## Usage

```sh
$ yarn
$ yarn build
```

Then run SSR renders to expose the error:

```sh
$ yarn run render

## Running arrow-render.js ##
foo <div style="color:red" data-reactroot=""></div>
/Users/rye/scm/fmd/radium-arrow-render-738/lib/arrow-render.js:15
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
                                                                                            ^

TypeError: Cannot call a class as a function
    at _classCallCheck (/Users/rye/scm/fmd/radium-arrow-render-738/lib/arrow-render.js:15:99)
    at Foo (/Users/rye/scm/fmd/radium-arrow-render-738/lib/arrow-render.js:29:5)
    at RadiumEnhancer.render (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/radium/lib/enhancer.js:145:18)
    at RadiumEnhancer.render (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/radium/lib/enhancer.js:208:139)
    at resolve (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/react-dom/cjs/react-dom-server.node.development.js:2149:18)
    at ReactDOMServerRenderer.render (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/react-dom/cjs/react-dom-server.node.development.js:2260:22)
    at ReactDOMServerRenderer.read (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/react-dom/cjs/react-dom-server.node.development.js:2234:19)
    at renderToString (/Users/rye/scm/fmd/radium-arrow-render-738/node_modules/react-dom/cjs/react-dom-server.node.development.js:2501:25)
    at Object.<anonymous> (/Users/rye/scm/fmd/radium-arrow-render-738/lib/arrow-render.js:55:42)
    at Module._compile (module.js:573:30)
failed


## Running method-render.js ##
foo <div style="color:red" data-reactroot=""></div>
Radium: userAgent should be supplied for server-side rendering. See https://github.com/FormidableLabs/radium/tree/master/docs/api#radium for more information.
wrapped <div style="color:red" data-radium="true" data-reactroot=""></div>
```