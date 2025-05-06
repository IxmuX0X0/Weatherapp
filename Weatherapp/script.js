const API_KEY = '78240d928564377ae323a184640543e2'; // API key

function getWeather() {
  const city = document.getElementById('city-input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weather-result').innerHTML = result;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
