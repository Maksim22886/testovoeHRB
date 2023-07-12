import { State } from '../types/State';
import Action from '../types/Action';

const initialState = {
  users: [],
};

const usersReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'get_users':
      return {
        ...state,
        users: action.payload,
      };
    case 'remove_user':
      return {
        ...state,
        users: state.users.filter((user) => user.employeeId !== action.payload),
      };
    case 'Add_user':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'update_user':
      return {
        ...state,
        users: state.users.map((user) =>
          user.employeeId === action.payload.employeeId ? action.payload : user,
        ),
      };
    default:
      return state;
  }
};
export default usersReducer;
