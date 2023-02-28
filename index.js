const processargv = process.argv;
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = processargv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});