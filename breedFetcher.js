const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // Print the error if one occurred
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    const breed = data[0];

    //Print message if breed not found
    if (!breed) {
      return callback("Breed not found!");
    } else {
      return callback(null, breed.description);
    }
  }
  );
};
module.exports = { fetchBreedDescription };
