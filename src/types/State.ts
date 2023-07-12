import { User } from '../features/getUsers/types/User';
import Action from './Action';

export type State = {
  users: User[];
};

export type ContextState = {
  state: State;
  dispatch: (value: Action) => void;
};
