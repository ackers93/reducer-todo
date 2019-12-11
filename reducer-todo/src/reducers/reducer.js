export const initialState = {
    todos: [
        {
            todo: 'Learn about reducers',
            completed: false,
            id: Date.now()
          }
    ]
}


  export const todoReducer = (state, action) => {
      switch (action.type) {
         case "ADD_TODO":
             return { ...state, 

                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        todo: action.text,
                        completed: false
                      }
                ]
             };

        case "TOGGLE_COMPLETE":
            return { ...state, 

                todos: state.todos.map( todo => {
                   return todo.id === action.id ? 
                        {...todo,
                        completed: !todo.completed}
                     : todo })
            };

            case 'CLEAR_COMPLETED' : 
                return {
                    ...state,
                    todos: state.todos.filter(todo => !todo.completed)
                };

        default:
            return state;
      }
  };