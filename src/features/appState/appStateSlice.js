const initialState = {
  citiesList: []
}

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'appState/setCitiesList': {
      return {
        ...state,
        citiesList: action.payload
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
