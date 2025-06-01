# Wraithveil Neon Mouse

A glowing neon mouse trail & orb effect for modern websites.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Development](#development)
- [License](#license)
- [Author](#author)

---

## Features

- Draws a glowing neon trail following the user’s mouse movement.
- Creates an interactive orb that explodes into particles on click and reassembles smoothly.
- Customizable colors, speeds, and particle counts via simple configuration.
- Lightweight, dependency-free vanilla JavaScript.
- Works in modern browsers.

## Installation

You can install via npm:

```bash
npm install wraithveil-neon-mouse --save
```

Or include the minified script directly in your HTML (from GitHub or your own CDN):

```html
<script src="dist/mouseNeon.min.js"></script>
```

## Usage

Initialize the effect with:

```html
<script>
  initNeonMouseEffect({
    zIndex: "9999",       // keep canvas above all elements
    pointerEvents: "none" // allow clicks through the neon canvas
  });
</script>
```

Call `destroyNeonMouseEffect()` to remove the canvas and event listeners.

## Options

| Option         | Type    | Default | Description                              |
| -------------- | ------- | ------- | ---------------------------------------- |
| `canvas`       | `DOM`   | `null`  | Provide an existing `<canvas>` element.  |
| `zIndex`       | `String`| `"9999"`| CSS z-index for the neon canvas.         |
| `pointerEvents`| `String`| `"none"`| Set to "none" to allow mouse clicks through the canvas. |

## Examples

See the `examples/index.html` file in this repository for a working demo. Copy or fork it into your own site to experiment.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Mouse Demo</title>
</head>
<body>
  <button id="startBtn">Start Neon</button>
  <button id="stopBtn" disabled>Stop Neon</button>

  <script src="dist/mouseNeon.min.js"></script>
  <script>
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', () => {
      initNeonMouseEffect();
      startBtn.disabled = true;
      stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', () => {
      destroyNeonMouseEffect();
      startBtn.disabled = false;
      stopBtn.disabled = true;
    });
  </script>
</body>
</html>
```

## Development

If you want to modify or extend the effect:

```bash
# Clone the repo
git clone https://github.com/PlumbMonkey/wraithveil-neon-mouse.git

# Install dev dependencies
npm install

# Bundle and minify
npm run build

# Watch for changes
npm run watch
```

The source code lives in `src/mouseNeon.js`. The build script (Rollup) outputs to `dist/`.

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Author

Wraithveil

Email: wraithveilmd@gmail.com  
Website: https://plumbmonkey.github.io/wraithveil.github.io/neon/index.html

Enjoy adding neon flair to your site! Feel free to open an issue or submit a pull request on GitHub if you find bugs or want to contribute enhancements.

