const getBasePath = () => {
  if (window.location.hostname.includes("github.io")) {
    return "/Enkeljon-Gjeta";
  }

  return "";
};

const baseUrl = getBasePath();

const home = new rive.Rive({
  src: `${baseUrl}/resources/home_button_text.riv`,
  canvas: document.getElementById("home"),
  autoplay: true,
  stateMachines: "home_state",
  onLoad: () => {
    home.resizeDrawingSurfaceToCanvas();
  },
});

const story = new rive.Rive({
  src: `${baseUrl}/resources/story_button_text.riv`,
  canvas: document.getElementById("story"),
  autoplay: true,
  stateMachines: "home_state",
  onLoad: () => {
    story.resizeDrawingSurfaceToCanvas();
  },
});

const hello = new rive.Rive({
  src: `${baseUrl}/resources/hello.riv`,
  canvas: document.getElementById("hello"),
  autoplay: true,
  stateMachines: "hello_machine",
  onLoad: () => {
    hello.resizeDrawingSurfaceToCanvas();
  },
});

const profile = new rive.Rive({
  src: `${baseUrl}/resources/profile.riv`,
  canvas: document.getElementById("profile"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    profile.resizeDrawingSurfaceToCanvas();
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const home_div = document.getElementById("home_div");
  const story_div = document.getElementById("story_div");

  document.getElementById("home").addEventListener("click", () => {
    home_div.classList.add("background");
    home_div.classList.remove("noBackground");
    story_div.classList.remove("background");
    story_div.classList.add("noBackground");
  });

  document.getElementById("story").addEventListener("click", () => {
    story_div.classList.add("background");
    story_div.classList.remove("noBackground");
    home_div.classList.remove("background");
    home_div.classList.add("noBackground");
  });
});

document.getElementById("profile").addEventListener("click", () => {
  document.getElementById("home").style.backgroundColor = "black";
  navigator.vibrate([500]);
});
