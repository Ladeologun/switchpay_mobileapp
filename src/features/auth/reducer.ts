import * as AuthActions from "./actionTypes";

const initialState = {
  idToken: null,
  userDetails: null,
};

interface AuthAction {
  type: string;
  payload?: any;
}

export default function authReducer(state = initialState, action: AuthAction) {
  const { payload, type } = action;

  switch (type) {
    case AuthActions.SAVE_ID_TOKEN:
      const { idToken } = payload;
      return {
        ...state,
        idToken,
      };
    case AuthActions.SAVED_USER_DETAILS:
      const { userDetails } = payload;
      return {
        ...state,
        userDetails,
      };
    case AuthActions.LOGOUT_USER:
      return {
        ...state,
        idToken: null,
      }
    case AuthActions.CLEAR_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
}
