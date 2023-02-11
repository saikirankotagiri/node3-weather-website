// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch(
//   "http://localhost:3000/weather?address=boston"
//   // `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true`
// ).then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  search.value = "";
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(
    `http://localhost:3000/weather?address=${location}`
    // `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true`
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
