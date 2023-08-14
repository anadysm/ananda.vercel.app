var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Sidoarjo,id&appid=3d2bf4920f84fd2059751bbe45a62b3a'
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    desc.innerHTML = descValue;
    temp.innerHTML = Math.trunc(tempValue - 273) + '\u00B0C';
  });
