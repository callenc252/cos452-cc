main();

//
// start here
//
function main() {
const canvas = document.querySelector("#gl-canvas");
const gl = canvas.getContext("webgl2");

if (!gl) {
  throw new Error("WebGL2 is not available on this device/browser.");
}

  gl.clearColor(0.0, 1.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}