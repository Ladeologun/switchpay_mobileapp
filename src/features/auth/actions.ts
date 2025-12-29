import * as AuthActions from './actionTypes';
import { UserDetails } from './types';

export const saveIDToken = (idToken:string) => ({
    type: AuthActions.SAVE_ID_TOKEN,
    payload: {idToken}
});

export const saveUserDetails = (userDetails:UserDetails) => ({
    type: AuthActions.SAVED_USER_DETAILS,
    payload: {userDetails}
});

export const logoutUser = () => ({
    type: AuthActions.LOGOUT_USER,
});
export const flushUserDetails = () => ({
    type: AuthActions.CLEAR_AUTH_STATE,
});