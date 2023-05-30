const initialState = {
  citiesList: [],
  sortedCities: [],
  chosenCity: [],
  fetchedCityData: [],
  userAuthCode: null
}

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'appState/setCitiesList': {
      return {
        ...state,
        citiesList: action.payload
      }
    }
    case 'appState/setChosenCity': {
      return {
        ...state,
        chosenCity: action.payload
      }
    }
    case 'appState/resetChosenCity': {
      return {
        ...state,
        chosenCity: initialState.chosenCity
      }
    }
    case 'appState/setSortedCities': {
      return {
        ...state,
        sortedCities: action.payload
      }
    }
    case 'appState/resetSortedCities': {
      return {
        ...state,
        sortedCities: initialState.sortedCities
      }
    }
    case 'appState/setFetchedCityData': {
      return {
        ...state,
        fetchedCityData: action.payload
      }
    }
    case 'appState/resetFetchedCityData': {
      return {
        ...state,
        fetchedCityData: initialState.fetchedCityData
      }
    }
    case 'appState/setUserAuthCode': {
      return {
        ...state,
        userAuthCode: action.payload
      }
    }
    case 'appState/resetUserAuthCode': {
      return {
        ...state,
        userAuthCode: initialState.userAuthCode
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
