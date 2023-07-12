import { createContext } from 'react';
import { ContextState } from './types/State';

const initialContextValue: ContextState = {
  state: {
    users: [],
  },
  dispatch: () => {},
};

const stateContext = createContext(initialContextValue);
export default stateContext;
