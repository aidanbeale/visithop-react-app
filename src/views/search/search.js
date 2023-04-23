import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Search() {
  const dispatch = useDispatch()
  const selectAppState = state => state.appState
  const appState = useSelector(selectAppState)

  debugger;

  return (
    <div>
      <h1>SEARCH PAGE</h1>
    </div>
  )
}

export default Search;
