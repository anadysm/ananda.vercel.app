var temp = document.querySelector('.temp');
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Sidoarjo,id&appid=3d2bf4920f84fd2059751bbe45a62b3a'
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data['main']['feels_like'];
    temp.innerHTML = Math.trunc(tempValue - 273) + '\u00B0C';
  });

jQuery(document).ready(function ($) {
  'use strict';

  $(document).on('click', 'a.smooth-scroll', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 80,
      },
      500
    );
  });
});

if (localStorage.getItem('theme') == 'light') setLightMode();

function setLightMode() {
  let isLight = document.body.classList.toggle('lightmode');
  if (isLight) {
    toggle = 'Darkswitch';
    localStorage.setItem('theme', 'light');
  } else {
    toggle = 'Lightswitch';
    localStorage.removeItem('theme');
  }
  document.getElementById('lightBtn').innerHTML = toggle;
}

new Typed('#typed', {
  strings: [
    '^1500 a ^500 marketing ^700 staff',
    '^1500 an ^1000 IT ^800 Support',
    '^1500 a ^1000 UI / ^200 UX ^300 designer',
    '^1500 a ^1000 web ^700 developer',
    '^1500 a ^1500 part ^500 time ^100 gamer',
    '^1500 a ^1000 full time ^800 learner',
    '^1500 welcoming ^1000 you',
    '^2000 nothing',
  ],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 8000,
  loop: true,
  smartBackspace: true,
});
