const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to weather service!", undefined);
      } else if (body.error) {
        callback(
          "Invalid details for the request or unable to find the location",
          undefined
        );
      } else {
        callback(
          undefined,
          `It is currently ${body.current_weather.temperature} degrees out there`
        );
      }
    }
  );
};

module.exports = forecast;

// https://api.open-meteo.com/v1/forecast?latitude=-75.7088&longitude=44.1545&current_weather=true
