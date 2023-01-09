const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "73b392007bmshda182225b8688d4p149746jsn741f8bea9ac0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = function (city) {
  cityName.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = `${new Date(response.sunrise).getHours()}:${new Date(
        response.sunrise
      ).getMinutes()}`;
      sunset.innerHTML = `${new Date(response.sunset).getHours()}:${new Date(
        response.sunset
      ).getMinutes()}`;
      temp_head.innerHTML = response.temp;
      humidity_head.innerHTML = response.humidity;
      wind_head.innerHTML = response.wind_speed;
      // console.log(response.sunrise);
      // console.log(response.sunset);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
  city.value = "";
});

getWeather("Nagpur");

// DropDown Funcnality
document.querySelectorAll(".dropdown-item").forEach(function (item) {
  item.addEventListener("click", (e) => getWeather(e.target.innerHTML));
});

// Delhi
fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    delhi_temp.innerHTML = response.temp;
    delhi_feels_like.innerHTML = response.feels_like;
    delhi_humidity.innerHTML = response.humidity;
    delhi_min_temp.innerHTML = response.min_temp;
    delhi_max_temp.innerHTML = response.max_temp;
    delhi_wind_speed.innerHTML = response.wind_speed;
    delhi_wind_degrees.innerHTML = response.wind_degrees;
    delhi_sunrise.innerHTML = `${new Date(
      response.sunrise
    ).getHours()}:${new Date(response.sunrise).getMinutes()}`;
    delhi_sunset.innerHTML = `${new Date(
      response.sunset
    ).getHours()}:${new Date(response.sunset).getMinutes()}`;
  })
  .catch((err) => console.error(err));

// Bengaluru
fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bengaluru`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    bengaluru_temp.innerHTML = response.temp;
    bengaluru_feels_like.innerHTML = response.feels_like;
    bengaluru_humidity.innerHTML = response.humidity;
    bengaluru_min_temp.innerHTML = response.min_temp;
    bengaluru_max_temp.innerHTML = response.max_temp;
    bengaluru_wind_speed.innerHTML = response.wind_speed;
    bengaluru_wind_degrees.innerHTML = response.wind_degrees;
    bengaluru_sunrise.innerHTML = `${new Date(
      response.sunrise
    ).getHours()}:${new Date(response.sunrise).getMinutes()}`;
    bengaluru_sunset.innerHTML = `${new Date(
      response.sunset
    ).getHours()}:${new Date(response.sunset).getMinutes()}`;
  })
  .catch((err) => console.error(err));

//Kolkata
fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    kolkata_temp.innerHTML = response.temp;
    kolkata_feels_like.innerHTML = response.feels_like;
    kolkata_humidity.innerHTML = response.humidity;
    kolkata_min_temp.innerHTML = response.min_temp;
    kolkata_max_temp.innerHTML = response.max_temp;
    kolkata_wind_speed.innerHTML = response.wind_speed;
    kolkata_wind_degrees.innerHTML = response.wind_degrees;
    kolkata_sunrise.innerHTML = `${new Date(
      response.sunrise
    ).getHours()}:${new Date(response.sunrise).getMinutes()}`;
    kolkata_sunset.innerHTML = `${new Date(
      response.sunset
    ).getHours()}:${new Date(response.sunset).getMinutes()}`;
  })
  .catch((err) => console.error(err));

// Mumbai
fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    mumbai_temp.innerHTML = response.temp;
    mumbai_feels_like.innerHTML = response.feels_like;
    mumbai_humidity.innerHTML = response.humidity;
    mumbai_min_temp.innerHTML = response.min_temp;
    mumbai_max_temp.innerHTML = response.max_temp;
    mumbai_wind_speed.innerHTML = response.wind_speed;
    mumbai_wind_degrees.innerHTML = response.wind_degrees;
    mumbai_sunrise.innerHTML = `${new Date(
      response.sunrise
    ).getHours()}:${new Date(response.sunrise).getMinutes()}`;
    mumbai_sunset.innerHTML = `${new Date(
      response.sunset
    ).getHours()}:${new Date(response.sunset).getMinutes()}`;
  })
  .catch((err) => console.error(err));
