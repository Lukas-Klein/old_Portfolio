const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const aboutEl = document.querySelector('.about');
const socialsEl = document.querySelector('.socials');
const careerEl = document.querySelector('.career');

link.forEach(el => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("lang");

    aboutEl.textContent = data[attr].about;
    socialsEl.textContent = data[attr].socials;
    careerEl.textContent = data[attr].career;
  });
});

var data = {
  "german": {
    'socials': 'Profile',
    'career': 'Karriere',
    "about":
      'Mein Name ist Lukas Klein, ich bin 20 Jahre alt und studiere Informatik. Ich arbeite bei der Deutschen Telekom AG als Dualer Student. Die Hochschule an der ich studiere ist die Provadis School of International Management & Technology GmbH in Frankfurt Höchst. Diese Webseite ist meiner erster Berührpunkt mit Webentwicklung.',
  },
};
