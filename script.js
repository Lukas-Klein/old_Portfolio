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
let icon = document.getElementById("icon");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "white") {
  document.body.classList.add("white-theme");
  icon.src = "fotos/moon.png";
}

icon.addEventListener("click", function () {
  document.body.classList.toggle("white-theme");

  let theme = "dark";
  if (document.body.classList.contains("white-theme")) {
    theme = "white";
    icon.src = "fotos/moon.png";
  } else {
    icon.src = "fotos/sun.png";
  }

  localStorage.setItem("theme", theme);
});

//Implementing scroll to top button
//Get the button
let mybutton = document.getElementById("button");

// When the user scrolls down 900px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  myFunction();
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
