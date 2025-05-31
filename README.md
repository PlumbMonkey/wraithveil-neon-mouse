# Wraithveil Neon Mouse

A glowing neon mouse trail & orb effect for modern websites. Drop in a single script (and optional CSS) to add dynamic “neon” trails and pulsing orb explosions wherever the user clicks or moves their cursor.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)

   * [Via npm/yarn](#via-npmyarn)
   * [Via CDN](#via-cdn)
   * [Manual Download](#manual-download)
3. [Usage](#usage)

   * [Basic Example](#basic-example)
   * [With Custom Canvas](#with-custom-canvas)
   * [API Reference](#api-reference)
4. [Customization Options](#customization-options)
5. [Demo](#demo)
6. [Directory Structure](#directory-structure)
7. [License](#license)
8. [Author](#author)

---

## Features

* **Glowing neon trail**: A multi-colored trail that follows the mouse, fading out smoothly.
* **Orb explosion**: Click anywhere to trigger a radial burst of neon particles that rapidly converge back into a pulsing orb at the cursor.
* **Performance-tuned**: Trail points clear within 50 ms of halting mouse movement; 24 particles zip back with dynamic acceleration.
* **Easy to integrate**: Single JavaScript file (with optional CSS) — no external dependencies required.
* **Configurable**: Expose methods to initialize/destroy, choose z-index, pointer-events, or supply your own `<canvas>`.

---

## Installation

### Via npm/yarn

```bash
npm install wraithveil-neon-mouse
# or
yarn add wraithveil-neon-mouse
```

Then in your code:

```js
import { initNeonMouseEffect, destroyNeonMouseEffect } from "wraithveil-neon-mouse";
```

---

### Via CDN

Include the latest release from a CDN (for example, [unpkg.com](https://unpkg.com)):

```html
<!-- Optional CSS -->
<link rel="stylesheet" href="https://unpkg.com/wraithveil-neon-mouse@1.0.0/dist/style.css" />

<!-- Script -->
<script src="https://unpkg.com/wraithveil-neon-mouse@1.0.0/dist/mouseNeon.min.js"></script>
```

After loading, the global functions `initNeonMouseEffect()` and `destroyNeonMouseEffect()` will be available.

---

### Manual Download

1. Download or clone this repository.
2. Copy `dist/mouseNeon.min.js` (and `dist/mouseNeon.min.js.map`, if desired) into your project.
3. Optionally copy `src/style.css` if you want included CSS for pointer events, etc.

---

## Usage

### Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Neon Mouse Demo</title>
  <style>
    /* (Optional) Basic page styling */
    body { margin: 0; background: #111; overflow: hidden; }
  </style>
</head>
<body>
  <!-- 1) Include the minified script -->
  <script src="dist/mouseNeon.min.js"></script>

  <!-- 2) Initialize the effect -->
  <script>
    initNeonMouseEffect();

    // Example: automatically destroy after 15 seconds
    setTimeout(() => {
      destroyNeonMouseEffect();
    }, 15000);
  </script>
</body>
</html>
```

---

### With Custom Canvas

By default, `initNeonMouseEffect()` inserts a full-screen `<canvas>` at z-index 9999. To use your own `<canvas>` element or change pointer-events/z-index:

```html
<canvas id="myCustomCanvas"></canvas>
<script>
  // Grab your existing <canvas> in the DOM
  const myCanvas = document.getElementById("myCustomCanvas");

  // Initialize with options
  initNeonMouseEffect({
    canvas: myCanvas,
    zIndex: "5000",           // e.g. to place behind certain elements
    pointerEvents: "auto"     // allow clicks through or on top
  });
</script>
```

---

### API Reference

#### `initNeonMouseEffect([options])`

* **Description**: Creates (or reuses) a `<canvas>` and begins tracking mouse movements & clicks.
* **Parameters**

  * `options` (object, optional)

    * `canvas` (object): An existing `<canvas>` element.
    * `zIndex` (string | number): CSS z-index of the canvas (default `"9999"`).
    * `pointerEvents` (string): CSS `pointer-events` property (default `"none"`).

```js
initNeonMouseEffect({
  canvas: document.getElementById("myCanvas"),  
  zIndex: "8000",             
  pointerEvents: "auto"       
});
```

#### `destroyNeonMouseEffect()`

* **Description**: Cancels the `requestAnimationFrame`, removes the `<canvas>`, and detaches all event listeners.
* **Usage**:

  ```js
  destroyNeonMouseEffect();
  ```

---

## Customization Options

At present, the main public API options are:

* **`canvas`**: Supply your own `<canvas>` (pre-sized or styled).
* **`zIndex`**: String/number to control layering in your page.
* **`pointerEvents`**: `"none"`, `"auto"`, etc., to allow or block pointer interactions with underlying elements.

If you want to tweak particle count, colors, sizes, or return speed, edit `src/mouseNeon.js` directly:

```js
// Example tweak in src/mouseNeon.js:
// Increase particle count
const ORB_PARTICLE_COUNT = 32; // instead of 24

// Adjust base force or ramp multipliers in the RETURN PHASE logic
```

After changes, rebuild with:

```bash
npm run build
```

---

## Demo

A standalone demo page is included under `examples/demo.html`. To view:

1. Ensure you have run `npm run build` (so `dist/mouseNeon.min.js` exists).
2. Open `examples/demo.html` in your browser (or run VS Code Live Server).

You can see the effect in action and inspect the HTML/JS to learn integration details.

---

## Directory Structure

```
wraithveil-neon-mouse/
├── dist/
│   ├── mouseNeon.min.js       # Production bundle (minified)
│   └── mouseNeon.min.js.map   # Source map
├── src/
│   ├── mouseNeon.js           # Unminified source code
│   └── style.css              # (Optional) CSS for default canvas styling
├── examples/
│   └── demo.html              # Self-contained demo page
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

* **`dist/`**: Minified production files.
* **`src/`**: Human-readable source for development.
* **`examples/`**: Example/demonstration HTML.
* **`package.json`**: npm metadata & build scripts.
* **`LICENSE`**: MIT license text.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

## Author

**Your Name**
Email: [you@yourdomain.com](mailto:you@yourdomain.com)
Website: [https://yourwebsite.com](https://yourwebsite.com)

Enjoy adding neon flair to your site! Feel free to open an issue or submit a pull request on GitHub if you find bugs or want to contribute enhancements.
