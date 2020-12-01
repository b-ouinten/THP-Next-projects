import { AUTHENTIFICATION_SUCCESS, AUTHENTIFICATION_FAIL, ACCESS_ACCOUNT, LOGOUT_SUCCESS } from './actionTypes';
import Cookies from 'js-cookie';

export const authSuccess = (response) => {
  return {
    type: AUTHENTIFICATION_SUCCESS,
    token: response.jwt,
    user: response.user
  }
}

export const authFail = () => {
  return {
    type: AUTHENTIFICATION_FAIL
  }
}

export const accessAccount = (response) => {
  return {
    type: ACCESS_ACCOUNT,
    user: response,
    token: Cookies.get('token')
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}