// Helper function to fetch data and handle HTTP errors
async function fetchData(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
  }
}

// Function to capitalize each word in weather conditions
function capitalizeWeatherCondition(condition) {
  return condition.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

// Function to fetch and display current weather
async function getCurrentWeather() {
  const apiKey = 'f788eb3ff90c4f9d9ab131200250204';
  const city = 'Manila';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
      const data = await fetchData(url);

      if (data.error) {
          document.getElementById('weather-info').innerHTML = `<p>Error: ${data.error.message}</p>`;
          return;
      }

      document.getElementById('weather-info').innerHTML = `
          <h3>${data.location.name}, ${data.location.country}</h3>
          <p>Temperature: ${Math.round(data.current.temp_c)}°C</p>
          <p>Condition: ${capitalizeWeatherCondition(data.current.condition.text)}</p>
          <img src="${data.current.condition.icon}" alt="Weather Icon">
      `;
  } catch (error) {
      document.getElementById('weather-info').innerHTML = `<p>Unable to fetch weather data.</p>`;
  }
}

// Function to fetch and display weather forecast
async function getWeatherForecast() {
  const apiKey = '2f788eb3ff90c4f9d9ab131200250204';
  const city = 'Manila';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

  try {
      const data = await fetchData(url);

      if (data.error) {
          document.getElementById('forecast-info').innerHTML = `<p>Error: ${data.error.message}</p>`;
          return;
      }

      let forecastHTML = '';
      data.forecast.forecastday.forEach(day => {
          forecastHTML += `
              <div class="forecast-day">
                  <h4>${day.date}</h4>
                  <p>Max Temp: ${Math.round(day.day.maxtemp_c)}°C</p>
                  <p>Min Temp: ${Math.round(day.day.mintemp_c)}°C</p>
                  <p>Condition: ${capitalizeWeatherCondition(day.day.condition.text)}</p>
                  <img src="${day.day.condition.icon}" alt="Forecast Icon">
              </div>
          `;
      });

      document.getElementById('forecast-info').innerHTML = forecastHTML;
  } catch (error) {
      document.getElementById('forecast-info').innerHTML = `<p>Unable to fetch forecast data.</p>`;
  }
}

// Load data when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  getCurrentWeather();
  getWeatherForecast();
});