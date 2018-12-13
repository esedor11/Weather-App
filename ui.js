class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.tempRange = document.getElementById('w-temprange');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `City: ${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `Sky: ${weather.weather[0].main}`;
    this.string.textContent = `Current Temp: ${Math.round(weather.main.temp)} F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} mbar`;
    this.tempRange.textContent = `Max temp: ${Math.round(weather.main.temp_max)} F / Min: ${Math.round(weather.main.temp_min)} F`;
    this.wind.textContent = `Wind: ${Math.round(weather.wind.speed)} mph From: ${Math.round(weather.wind.deg)} deg`;
  }
}
