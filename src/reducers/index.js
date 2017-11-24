const addEmployee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
        ...state,
        {
          name: action.name,
          pony: true
        }
      ];
    case 'PONIFY_EMPLOYEE':
      return state.map(employee =>
        (employee.name === action.name) ? {...employee, pony: !employee.pony} : employee
      )
    default:
      return state;
  }
}

export default addEmployee
