const r = new rive.Rive({
  src: "resources/home_button_text.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  // artboard: "Arboard", // Optional. If not supplied the default is selected
  stateMachines: "home_state",
  onLoad: () => {
    // Ensure the drawing surface matches the canvas size and device pixel ratio
    r.resizeDrawingSurfaceToCanvas();
  },
});
