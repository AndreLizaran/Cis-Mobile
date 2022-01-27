// Modules
import React, { createContext, ReactNode, useReducer } from 'react';

// Reducers
import UserReducer from './UserReducer';

export type InitialStateUserContext = {
  uid: string;
  userName: string;
};

const initialState: InitialStateUserContext = {
  uid: '',
  userName: '',
};

type UserContext = {
  state: InitialStateUserContext;
  signIn: (payload: SignInProps) => void;
  signUp: (payload: SignUpProps) => void;
  signOut: () => void;
};

// Nueva implementación
export const UserContext = createContext({} as UserContext);

type Props = {
  children: ReactNode;
};

export default function UserState({ children }: Props) {
  //
  const [state, dispatch] = useReducer(UserReducer, initialState);

  function signIn(payload: SignInProps) {
    dispatch({ type: 'SIGN_IN', payload });
  }

  function signUp(payload: SignUpProps) {
    dispatch({ type: 'SIGN_UP', payload });
  }

  function signOut() {
    dispatch({ type: 'SIGN_OUT' });
  }

  return (
    <UserContext.Provider
      value={{
        state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export type SignInProps = { uid: string; userName: string };
export type SignUpProps = { uid: string; userName: string };
