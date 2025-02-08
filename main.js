const home = new rive.Rive({
  src: "/Enkeljon-Gjeta/resources/home_button_text.riv",
  canvas: document.getElementById("home"),
  autoplay: true,
  stateMachines: "home_state",
  onLoad: () => {
    home.resizeDrawingSurfaceToCanvas();
  },
});

const story = new rive.Rive({
  src: "/Enkeljon-Gjeta/resources/story_button_text.riv",
  canvas: document.getElementById("story"),
  autoplay: true,
  stateMachines: "home_state",
  onLoad: () => {
    story.resizeDrawingSurfaceToCanvas();
  },
});
