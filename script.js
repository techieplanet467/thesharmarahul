// global variables
const navElm = document.querySelector("nav.menu");
const mediaQueryWidth = 770;
// Menu bar toggle display on small devices
function toggleMenu() {
  if (getComputedStyle(navElm).display == "none") navElm.style.display = "flex";
  else navElm.style.display = "none";
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
observer.observe(document.querySelector("main div.center"));

// testing and dev works
addEventListener("resize", (e) => {
  if (innerWidth > 770) navElm.style.display = "flex";
  else navElm.style.display = "none";
});

// hacking effect of the text onload
addEventListener("DOMContentLoaded", () => {
  let elm = document.getElementById("random-effect");
  let text = elm.innerText.split("");
  let randomText =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMN OPQRSTUVWXYZ0123456789!@#$%^&*()_+".split(
      ""
    );
  let len = randomText.length;
  elm.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    elm.innerHTML += randomText[random(0, len)];
  }
  text.forEach((t) => console.log(t));
  // index of text
  let i = 0;
  let randomId = 0;
  // let intervalID = setInterval(() => {

  //   if (i >= text.length) clearInterval(intervalID);
  //   else if (randomId >= len) {
  //     randomId = 0;
  //     i++;
  //   } else randomId++;
  // }, 100);
});
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
