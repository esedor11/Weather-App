class Weather {
  constructor(city, country) {
    this.apiKey = 'needs API key';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();

    return responseData;

  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
