class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Detroit';
    this.defaultCountry = 'US';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('country') === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    // saving as strings so don't need stringify
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
