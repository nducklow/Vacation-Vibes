function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    const requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=5f895fcd&app_key=6f63b5bf6770660094d8cbd14be56f22%20%09&cuisineType=Indian&mealType=Snack';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (foods) {
        console.log(foods.hits);
        // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
        for (let i = 0; i < 5; i++) {
          console.log(foods.hits[i])
        }
      });
  }

  getApi() 

  