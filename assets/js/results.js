const regionName = document.querySelector('#regionName')
const regionImage = document.querySelector('#regionImage')
const radioFavorites = document.querySelector('#radioFavorites')
const recipeFavorites = document.querySelector('#recipeFavorites')
const radioStation = document.querySelector('#radioStation')
const radioStream = document.querySelector('#radioStream')
const radioImage = document.querySelector('#radioImage')
const recipe = document.querySelector('#recipes')

let currentRegion = (localStorage.getItem('region'))



switch(currentRegion) {
  case "usa":
    getRecipeUsa()
    getStationUsa()
    break
  case "caribbean":
    getRecipeCaribbean()
    getStationCaribbean()
    break
  case "india":
    getRecipeIndia()
    getStationIndia()
    break
  case "italy":
    getRecipeItaly()
    getStationItaly()
    break
  case "japan":
   getRecipeJapan()
   getStationJapan()
   break
  case "middleEast":
    getRecipeMiddleEast()
    getStationMiddleEast()
    break
}



//Api Call Functions
function getRecipeUsa() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=American&dishType=Main%20course&imageSize=REGULAR&random=true&field=label&field=image&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationUsa() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/bynameexact/Radio%20Paradise'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (station) {
        const stationName = document.createElement('h2')
        radioStream.src = station[9].url_resolved
        radioImage.src = station[9].favicon
        stationName.textContent = station[9].name
        radioStation.appendChild(stationName)

    });
}

function getRecipeCaribbean() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=Caribbean&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=Caribbean&dishType=Main%20course&imageSize=REGULAR&random=true&field=label&field=image&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationCaribbean() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/byname/merengue%20radio'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const station of data) {
        const stationName = document.createElement('h2')
        radioStream.src = station.url_resolved
        radioImage.src = station.favicon
        stationName.textContent = station.name
        radioStation.appendChild(stationName)

      }
    });
}

function getRecipeIndia() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=Indian&dishType=Main%20course&imageSize=REGULAR&random=true&field=label&field=image&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationIndia() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/byname/big%2092.7'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const station of data) {
        const stationName = document.createElement('h2')
        radioStream.src = station.url_resolved
        radioImage.src ="./assets/images/indiaRadioImage.jpg"
        stationName.textContent = station.name
        radioStation.appendChild(stationName)

      }
    });
}

function getRecipeItaly() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=Pasta&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=Italian&dishType=Main%20course&imageSize=REGULAR&random=true&field=label&field=image&field=images&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationItaly() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/byname/rai%20radio%20tutta'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (station) {
      const stationName = document.createElement('h2')
      radioStream.src = station[2].url_resolved
      radioImage.src ="./assets/images/italyRadioImage.png"
      stationName.textContent = station[2].name
      radioStation.appendChild(stationName)

  });
}

function getRecipeJapan() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=Japanese&mealType=Dinner&dishType=Main%20course&imageSize=REGULAR&field=label&field=image&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationJapan() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/bynameexact/J1%20HITS'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const station of data) {
        const stationName = document.createElement('h2')
        radioStream.src = station.url_resolved
        radioImage.src = station.favicon
        stationName.textContent = station.name
        radioStation.appendChild(stationName)

      }
    });
}

function getRecipeMiddleEast() {

  const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=Middle%20Eastern&app_id=5ef662a9&app_key=2b6981a6dc15a4dea4e76ee2c8291e98&cuisineType=Middle%20Eastern&dishType=Main%20course&imageSize=REGULAR&random=true&field=label&field=image&field=url'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (foods) {
      for (let i = 0; i < 3; i++) {
        const recipeName = document.createElement('h2')
        const recipeImage = document.createElement('img')
        const recipeUrl = document.createElement('a')
        recipeName.textContent = foods.hits[i].recipe.label
        recipeImage.src = foods.hits[i].recipe.image
        recipeUrl.href = foods.hits[i].recipe.url
        recipeUrl.textContent = "Recipe Link!"
        recipe.appendChild(recipeName)
        recipe.appendChild(recipeImage)
        recipe.appendChild(recipeUrl)

      }
    });
  }

function getStationMiddleEast() {

  const requestUrl = 'https://at1.api.radio-browser.info/json/stations/byname/radio%209090%2090'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const station of data) {
        const stationName = document.createElement('h2')
        radioStream.src = station.url_resolved
        radioImage.src ="./assets/images/middleEastRadioImage.png"
        stationName.textContent = `Egypt ${station.name}`
        radioStation.appendChild(stationName)

      }
    });
}