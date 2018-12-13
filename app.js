// Initialize Storage class
const storage = new Storage();
// Init UI class
const ui = new UI;

// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather class
const weather = new Weather(weatherLocation.city,weatherLocation.country);

// Get weather on DOM load (wrap in function)
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Call getWeather again to get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
weather.getWeather()
  .then(results => {

    ui.paint(results);

  })

  .catch(err => console.log(err));

}
