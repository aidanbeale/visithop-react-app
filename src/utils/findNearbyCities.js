export default function findNearbyCities(
  citiesArray,
  chosenCity
) {
  return new Promise((resolve, reject) => {
    // Clone array to not intefere with cities list
    var citiesListCopy = [];
    for (var i = 0; i < citiesArray.length; i++) {
      citiesListCopy[i] = citiesArray[i];
    }

    topLocations(citiesListCopy, chosenCity);

    // CODE FROM:
    // https://www.geodatasource.com/developers/javascript
    function distance(lat1, lon1, lat2, lon2, unit) {
      if (lat1 === lat2 && lon1 === lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") {
          dist = dist * 1.609344;
        }
        if (unit === "N") {
          dist = dist * 0.8684;
        }
        // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
        dist = Math.round((dist + Number.EPSILON) * 100) / 100;
        // set distance really high if the city is too close
        if (dist < 25) {
          dist = 9999;
        }
        return dist;
      }
    }

    function topLocations(locationArray, chosenCity) {
      for (var i = 0; i < locationArray.length; i++) {
        locationArray[i]["distance"] = distance(
          chosenCity.latitude,
          chosenCity.longitude,
          locationArray[i]["latitude"],
          locationArray[i]["longitude"],
          "K"
        );
      }

      locationArray.sort(function (a, b) {
        return a.distance - b.distance;
      });
      // Removing first city as it will be the same as searched city
      locationArray.shift();
      // Save sorted city arry to state
      resolve(locationArray.slice(0, 6));
    }
  });
}
