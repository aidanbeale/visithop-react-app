const initialState = {
  citiesList: [],
  sortedCities: [],
  chosenCity: [],
  fetchedCityData: [],
  userAuthCode: null,
  userToken: null,
  userInfo: null
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
    case 'appState/setUserToken': {
      return {
        ...state,
        userToken: action.payload
      }
    }
    case 'appState/resetUserToken': {
      return {
        ...state,
        userToken: initialState.userToken
      }
    }
    case 'appState/setUserInfo': {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case 'appState/resetUserInfo': {
      return {
        ...state,
        userInfo: initialState.userInfo
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
