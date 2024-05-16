const regionName = document.querySelector('#regionName')
const regionImage = document.querySelector('#regionImage')
const radioFavorites = document.querySelector('#radioFavorites')
const recipeFavorites = document.querySelector('#recipeFavorites')
const recipeName = document.querySelector('#recipeName')
const recipeLink = document.querySelector('#recipeLink')
const recipeImage = document.querySelector('#recipeImage')
const radioStation = document.querySelector('#radioStation')
const radioStream = document.querySelector('#radioStream')
const radioImage = document.querySelector('#radioImage')

let currentRegion = (localStorage.getItem('region'))


function getApi() {
  if (currentRegion = "usa"){

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/bynameexact/J1%20HITS'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      for (const station of data) {
       const stationName = document.createElement('h2')
       radioStream.src = station.url_resolved
       radioImage.src = station.favicon
       stationName.textContent = station.name
       radioStation.appendChild(stationName)
      }
    });
  }
  }

  getApi()













// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   const requestUrl = 'http://at1.api.radio-browser.info/json/stations/bytag/jpop';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (foods) {
//       console.log(foods.url);
//       for (let i = 0; i < 5; i++) {
//         console.log(foods.url[i])
//       }
//     });
// }

getApi()


