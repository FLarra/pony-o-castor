const addEmployee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
        ...state,
        {
          name: action.name
        }
      ];
    default:
      return state;
  }
}

export default addEmployee
