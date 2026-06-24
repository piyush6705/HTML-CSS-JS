
const apiKey ="c8d59a02ca2e897e95d802d81f8fe8ad";


async function checkWeather(city) {

  const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    
  const response = await fetch(apiUrl + `&appid=${apiKey}`);

  var data = await response.json();

  const weatherIcon = document.querySelector('.weather-icon');

  const weatherImages = {
    Clear: 'images/clear.png',
    Clouds: 'images/clouds.png',
    Rain: 'images/rain.png',
    Drizzle: 'images/drizzle.png',
    Mist: 'images/mist.png',
    Snow: 'images/snow.png'
  };

  weatherIcon.src =
    weatherImages[data.weather[0].main] || 'images/clear.png';

  console.log(data);

  document.querySelector('.city').innerHTML= data.name;
  document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML= data.main.humidity + '%';
  document.querySelector('.wind').innerHTML= data.wind.speed + ' km/h';
}

const searchBox = document.querySelector('.search-box');
const SearchBtn = document.querySelector('.search-btn');


SearchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener('keydown', (event) => {
  if (event.key ==='Enter'){
    checkWeather(searchBox.value);
  }
});





