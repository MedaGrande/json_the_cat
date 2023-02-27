const request = require('request');
const processargv = process.argv;
const name = processargv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (error) {
    // Print the error if one occurred
    console.log("Incorrect request, please check the url!");
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    //Print message if breed not found
    if (data.length === 0) {
      console.log("Breed not found!");
    } else {
      console.log(data[0]['description']);
    }
  }
});