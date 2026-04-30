const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = document.querySelectorAll(".nav-link");

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
  });
});

if (musicButton && backgroundMusic) {
  let isPlaying = false;

  musicButton.addEventListener("click", () => {
    if (!isPlaying) {
      backgroundMusic.play();
      musicButton.textContent = "Pause Music";
      isPlaying = true;
    } else {
      backgroundMusic.pause();
      musicButton.textContent = "Play Music";
      isPlaying = false;
    }
  });
}
