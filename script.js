// global variables
const navElm = document.querySelector("nav.menu");
const mediaQueryWidth = 770;
// Menu bar toggle display on small devices
function toggleMenu() {
  console.log("hello");
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
  let text = elm.innerHTML.split("");
  let randomText = "adehlorwDGHILM W45689!@#$%^*()_+'\"".split("");
  let len = randomText.length;
  elm.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    elm.innerHTML += randomText[random(0, len)];
  }
  // index of text
  let i = 0;
  let randomId = 0;
  let intervalID = setInterval(() => {
    let arr = elm.innerHTML.split("");
    arr[i] = randomText[randomId];
    elm.innerHTML = arr.join("");
    if (arr[i] == text[i]) {
      randomId = 0;
      i++;
    }
    if (i >= text.length) clearInterval(intervalID);
    else if (randomId >= len) {
      randomId = 0;
      i++;
    } else randomId++;
  }, 1);
});
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// skills tab fill with js
const skills = [
  {
    title: "HTML",
    level: "Advanced",
    percent: 90,
    icon: "fab fa-html5",
    color: "#e34c26",
  },
  {
    title: "CSS",
    level: "Intermediate",
    percent: 65,
    icon: "fab fa-css3-alt",
    color: "#264de4",
  },
  {
    title: "JavaScript",
    level: "Advanced",
    percent: 75,
    icon: "fab fa-js",
    color: "#F0DB4F",
  },
  {
    title: "HTML5 Canvas",
    level: "Advanced",
    percent: 70,
    icon: "fas fa-palette",
    color: "blueviolet",
  },
  {
    title: "Typing Speed",
    level: "55 WPM",
    percent: 70,
    icon: "fas fa-keyboard",
    color: "blueviolet",
  },
  {
    title: "UI/UX Design",
    level: "Intermediate",
    percent: 65,
    icon: "fa fa-laptop-code",
    color: "blueviolet",
  },
  {
    title: "Linux",
    level: "Intermediate",
    percent: 55,
    icon: "fab fa-linux",
    color: "blueviolet",
  },
  {
    title: "PHP",
    level: "Intermediate",
    percent: 65,
    icon: "fab fa-php",
    color: "#474A8A",
  },
  {
    title: "Python",
    level: "Intermediate",
    percent: 40,
    icon: "fab fa-python",
    color: "#306998",
  },
];
const skillElm = document.querySelector("section.skills");
function skillTemplate({ icon, title, level, percent, color }) {
  return `
  <div class="skill">
        <p
        class="progress"
        style="background: conic-gradient(blueviolet ${
          (percent / 100) * 360
        }deg, #eee 0deg);">
          <span class="${icon}" style="color:${color}"></span>
        </p>
        <p class="detail">
          <span class="title">${title}</span>
          <span class="level">${level}</span>
        </p>
      </div>
  `;
}
addEventListener("DOMContentLoaded", function () {
  skills.forEach((skill) => {
    skillElm.innerHTML += skillTemplate(skill);
  });
  skillElm.innerHTML += `
  <div class="more">
    <a href="#" class="read-btn">Read More</a>
  </div>`;
});
