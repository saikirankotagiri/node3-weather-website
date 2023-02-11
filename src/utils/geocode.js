const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=ce315208808a355a2415343b8e83630f&query=${address}`;

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (body.error) {
        callback(
          "Invalid details for the request or unable to find the location",
          undefined
        );
      } else if (body.data.length === 0) {
        callback("Invalid city name", undefined);
      } else {
        callback(undefined, {
          latitude: body.data[0].latitude,
          longitude: body.data[0].longitude,
          location: body.data[0].name,
        });
      }
    }
  );
};

module.exports = geocode;
