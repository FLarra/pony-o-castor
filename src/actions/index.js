export const addEmployee = (name) => ({
  type: 'ADD_EMPLOYEE',
  name
})

export const ponifyEmployee = (name) => ({
  type: 'PONIFY_EMPLOYEE',
  name
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
