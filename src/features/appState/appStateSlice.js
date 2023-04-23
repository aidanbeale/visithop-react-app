const initialState = {
  citiesList: [],
  chosenCity: []
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
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
