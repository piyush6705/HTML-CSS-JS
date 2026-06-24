# 🌦️ Weather App

A simple and responsive Weather App built using **HTML, CSS, and JavaScript** that fetches real-time weather data from the OpenWeather API.

## 🚀 Features

* Search weather by city name
* Real-time weather information
* Displays:

  * Temperature
  * City Name
  * Humidity
  * Wind Speed
* Dynamic weather icons based on current weather conditions
* Search using button click or Enter key
* Responsive and modern UI

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeather API

## 📂 Project Structure

```text
weather-app/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── clear.png
    ├── clouds.png
    ├── drizzle.png
    ├── humidity.png
    ├── mist.png
    ├── rain.png
    ├── search.png
    ├── snow.png
    └── wind.png
```

## ⚙️ How It Works

1. Enter a city name in the search box.
2. Click the search button or press Enter.
3. The app sends a request to the OpenWeather API.
4. Weather information is fetched and displayed on the screen.
5. The weather icon changes automatically based on the current weather condition.

## 🔑 API Setup

1. Create a free account on OpenWeather.
2. Generate your API key.
3. Replace the API key in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY";
```

## 🌟 Future Improvements

* Error handling for invalid city names
* Loading animation
* 5-day weather forecast
* Geolocation support
* Dark/Light mode
* Dynamic background changes based on weather conditions

## 📚 What I Learned

* Working with APIs using Fetch
* JavaScript Async/Await
* DOM Manipulation
* Event Listeners
* Dynamic UI Updates
* Error Handling

## 👨‍💻 Author

Piyush

Built as a frontend project to practice JavaScript, API integration, and responsive web design.
