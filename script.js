//Start of typewriter effect
AOS.init({
  mirror: true,
});

//Implementing the inactive website title
window.onload = function () {
  let pageTitle = document.title;
  let attentionMessage = "Come Back! 😥";

  document.addEventListener("visibilitychange", function () {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });
};

//implementing white mode toggle//
const toggle = document.getElementById("toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "white") {
  body.classList.add("white-theme");
} else {
  body.classList.add("dark-theme");
}

toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;
  let theme = "dark";

  if (isChecked) {
    theme = "white";
    swal("Be Careful!", "You should put on your sunglasses 😎", "info").then(
      (pressed) => {
        if (pressed && isChecked) {
          body.classList.add("white-theme");
          theme = "white";
        } else {
          document.getElementById("toggle").checked = false;
          theme = "dark";
        }
      }
    );
  } else {
    theme = "dark";
    body.classList.remove("white-theme");
  }

  localStorage.setItem("theme", theme);
  localStorage.setItem("toggle", toggle.checked);
});

//checks state of toggle switch
function isChecked() {
  if (document.getElementById("toggle").checked == false) {
    document.getElementById("toggle").checked =
      localStorage.getItem("toggle") === "true";
  }
}

window.onload = function () {
  isChecked();
};

// When the user clicks on the arrow it goes to lukas section
function arrowclick() {
  document.getElementById("#lukas").scrollIntoView();
}

//Implementing scroll to top button
//Get the button
let mybutton = document.getElementById("button");

// When the user scrolls down 900px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  myFunction();
  stickynavbar();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.location.hash = "home";
}
/*
//make navbar stick to top
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function stickynavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}*/

//Scroll indicator
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

//typewriting front page
let bigtext = document.getElementById("textbig");

let typewriter = new Typewriter(bigtext, {
  delay: 50,
});

typewriter.typeString("Hi, my name is Lukas Klein!").pauseFor(1000).start();

let smalltext = document.getElementById("textsmall");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

sleep(2000).then(() => {
  let typewriter2 = new Typewriter(smalltext, {
    delay: 50,
  });
  typewriter2
    .typeString("and i am currently studying computer science in Germany.")
    .start();
});

sleep(6500).then(() => {
  document.getElementById("textsmaller").innerHTML +=
    "Welcome to my portfolio Website.";
});

var style = getComputedStyle(document.body);

//confetti
sleep(6500).then(() => {
  confetti({
    particleCount: 500,
    startVelocity: 30,
    spread: 360,
    ticks: 900,
    gravity: 0.5,
    scalar: 0.8,
    colors: [
      style.getPropertyValue("--primary-color"),
      style.getPropertyValue("--secondary-color"),
      style.getPropertyValue("--text-color"),
    ],
  });
});
