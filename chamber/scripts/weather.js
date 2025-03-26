// A helper function to fetch data and handle HTTP errors
async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      // If the HTTP status is not OK, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw to let the calling function handle the error.
    }
  }
  
  // Function to fetch and display current weather
  async function getCurrentWeather() {
    const apiKey = '26dd370543cd4502a3802905252503'; // Replace with your actual WeatherAPI key
    const city = 'Manila';               // You can change this or get it dynamically
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const data = await fetchData(url);
  
      if (data.error) {
        document.getElementById('weather-info').innerHTML = `<p>Error: ${data.error.message}</p>`;
        return;
      }
  
      document.getElementById('weather-info').innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
      `;
    } catch (error) {
      // This catch is triggered when the fetchData fails (network error, CORS, etc.)
      document.getElementById('weather-info').innerHTML = `<p>Unable to fetch weather data.</p>`;
    }
  }
  
  // Function to fetch and display weather forecast
  async function getWeatherForecast() {
    const apiKey = '26dd370543cd4502a3802905252503'; // Replace with your actual WeatherAPI key
    const city = 'Manila';               // You can change this or make it dynamic
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
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
            <p>Condition: ${day.day.condition.text}</p>
            <img src="${day.day.condition.icon}" alt="Forecast Icon">
          </div>
        `;
      });
  
      document.getElementById('forecast-info').innerHTML = forecastHTML;
    } catch (error) {
      document.getElementById('forecast-info').innerHTML = `<p>Unable to fetch forecast data.</p>`;
    }
  }
  
  // Run the functions once the page is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    getCurrentWeather();
    getWeatherForecast();
  });  