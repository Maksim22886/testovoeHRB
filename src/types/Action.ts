import { User, UserId } from '../features/getUsers/types/User';

type Action =
  | { type: 'get_users'; payload: User[] }
  | { type: 'remove_user'; payload: UserId }
  | { type: 'Add_user'; payload: User }
  | { type: 'update_user'; payload: User };

export default Action;
