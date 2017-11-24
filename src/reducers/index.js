const addEmployee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      let newState = [
        ...state,
        {
          name: action.name
        }
      ]
      console.log(newState);

      return newState;
    default:
      console.log(state);
      return state;
  }
}

export default addEmployee
