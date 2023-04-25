const getCityData = (cities) => {
  return new Promise((resolve, reject) => {
    async function fetchCities() {
      // TODO: strip unused keys from cities object
      const response = await fetch(process.env.REACT_APP_CITIES_API + '/city', {
        method: "POST",
        body: JSON.stringify({cities: cities})
      });
      const responseData = await response.json();
      if (responseData) {
        return responseData;
      }
      throw Error("Nope. Try again.");
    }

    fetchCities()
      .then((fetchedCities) => {
        resolve(fetchedCities);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getCityData;