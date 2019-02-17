import { combineReducers } from 'redux'
import employees from './employees'
import visibilityFilter from './visibilityFilter'

const employeesApp = combineReducers({
  employees,
  visibilityFilter
})

export default employeesApp
