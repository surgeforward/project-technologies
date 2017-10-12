import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
import projects from './projectsReducer'
import projectNames from './projectNamesReducer'

export default combineReducers({
  projects,
  projectNames
})