// Types
import { InitialStateUserContext, SignInProps, SignUpProps } from './UserContext';

type Actions =
  | { type: 'SIGN_IN'; payload: SignInProps }
  | { type: 'SIGN_UP'; payload: SignUpProps }
  | { type: 'SIGN_OUT' };

export default function UserReducer(
  state: InitialStateUserContext,
  action: Actions
): InitialStateUserContext {
  //
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        uid: action.payload.uid,
        userName: action.payload.userName,
      };
    case 'SIGN_UP':
      return {
        ...state,
        uid: action.payload.uid,
        userName: action.payload.userName,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        uid: '',
        userName: '',
      };
    default:
      return state;
  }
}
