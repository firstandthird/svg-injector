# svg-injector

Loads and caches an SVG file and injects it into the DOM.

## Installation

```sh
npm install @firstandthird/svg-injector
```

## Usage

In your project import the library:

```javascript
import { loadSVG, injectSVG } from '@firstandthird/svg-injector'
```

The `injectSVG` method will be automatically called once the `DOMContentLoaded` event is fired using `window.svgLocation` as parameter.

## Events

Custom events are fired on injection.

| Event             | Where   | When                         |
|-------------------|---------|------------------------------|
| `svgicons:loaded` | `body`  | SVG is injected into the DOM |

## API

- [loadSVG](#loadsvgurl-callback)
- [injectSVG](#injectsvgurl)

### loadSVG(url, [callback])

Loads an SVG file.

#### Parameters

`url` - {string} - A valid URL to the SVG file.

`[callback]` {function} - Callback function called once the SVG is loaded.

#### Example

```javascript
loadSVG('image.svg', (svg) => {
  console.log(svg); // prints the SVG content
});
```

### injectSVG(url)

Injects an SVG into the DOM. Calls [loadSVG](#loadsvgurl-callback).

#### Parameters

`url` - {string} - A valid URL to the SVG file. Fires a [`svgicons:loaded`](#events) event when completed.

#### Example

```javascript
injectSVG('image.svg');
```
