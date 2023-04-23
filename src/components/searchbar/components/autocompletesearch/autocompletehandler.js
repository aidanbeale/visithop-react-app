export default function autocompletehandler(inp, arr) {
  if (arr) {
    var numberShown = [];
    for (var i = 0; i < arr.length; i++) {
      if (numberShown.length < 5) {
        if (
          arr[i].name.substr(0, inp.length).toUpperCase() === inp.toUpperCase()
        ) {
          numberShown.push(arr[i]);
        }
      } else {
        break;
      }
    }
    return numberShown;
  } else {
    return [];
  }
}
