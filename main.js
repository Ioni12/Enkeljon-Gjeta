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

const home_div = document.getElementById("home");
const story_div = document.getElementById("story");

home_div.addEventListener("click", () => {
  home_div.classList.add("background");
  home_div.classList.remove("noBackground");
  story_div.classList.remove("background");
  story_div.classList.add("noBackground");
});

story_div.addEventListener("click", () => {
  story_div.classList.add("background");
  story_div.classList.remove("noBackground");
  home_div.classList.remove("background");
  home_div.classList.add("noBackground");
});
