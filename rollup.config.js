// rollup.config.js
// Pull the “terser” export out of the plugin’s CJS object:
const terserPlugin = require("@rollup/plugin-terser");
const terser = terserPlugin.terser || terserPlugin.default || terserPlugin;

module.exports = {
  input: "src/mouseNeon.js",
  output: {
    file: "dist/mouseNeon.min.js",
    format: "iife",
    name: "WraithveilNeonMouse",
    sourcemap: true
  },
  plugins: [
    terser({
      output: { comments: false }
    })
  ]
};
