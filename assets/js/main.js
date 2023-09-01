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
    toggle = '<u>L:ght</u>';
    localStorage.setItem('theme', 'light');
  } else {
    toggle = '<del>L:ght</del>';
    localStorage.removeItem('theme');
  }
  document.getElementById('lightBtn').innerHTML = toggle;
}

new Typed('#typed', {
  strings: [
    '^1500 an ^1000 IT ^800 Support',
    '^1500 an ^500 invoice ^700 clerk',
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

var quotes = [
  "This is my dream? I'm not even sleeping.",
  'Everything takes longer than you think.',
  'Sooner your dream comes, sooner you get bored.',
  "Your life it's fine, you are the disaster itself.",
  'Deny, anger, bargaining, depression and acceptance.',
  'Life seems but a quick succession of busy nothings.',
  'Our scars make us know that our past was for real.',
  'I cannot speak well enough to be unintelligible.',
  "I didn't choose this life.",
  'Every solution breeds new problems.',
  "People don't die from suicide, they die from sadness.",
  'Good designer copy, great designer steal.',
  "I'm the designer of my own cataclysm.",
  "Silence isn't empty, it's full of answer.",
  "You miss 100% of shots you don't take.",
  'Spoiler, we die in the end.',
  'Failure builds character.',
  'If you get tired, learn to rest not quit.',
  'The pure and simple truth is rarely pure and never simple.',
  'Man invented language to satisfy his deep need to complain.',
  'But without the dark, we never see the stars.',
  'The world is full of monsters with friendly faces.',
  'Hell is empty and all the devils are here.',
  'Fake people have an image to maintain.',
  "Don't try to be the best, just try to be good.",
  "Words are free, it's how you use them that may cost you.",
  'Sometimes you have to unfollow people in real life.',
  "You can't chase happiness, you must create them.",
  "Everything's real but not everyone's true.",
  "What we know is a drop, what we don't know is an ocean.",
  'Icarus flew too close to the sun and melted his wings.',
  'Time is just a stubborn illusion.',
  'Time without purpose is a prison.',
  'No sound without silence.',
  'Pain makes people change.',
  "We repeat what we don't repair.",
  "Sleep just isn't sleep anymore, it's an escape.",
  "You can't stop the waves, but you can learn to surf.",
  "You can't ask nicely to remove chaos.",
  'And then suddenly I became sad for no reason at all.',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randomNumber];
}

newQuote();
