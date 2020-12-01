import { AUTHENTIFICATION_SUCCESS , AUTHENTIFICATION_FAIL, ACCESS_ACCOUNT, LOGOUT_SUCCESS } from './actionTypes';
import Cookies from 'js-cookie';

const initialState = {
  token: null,
  isAuthenticated: null,
  user: null
}

const authReducer = (state = initialState, action) => {
  
  
  switch(action.type) {
    case ACCESS_ACCOUNT:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        user: action.user
      }

      // Repo de js-cookie pour la syntaxe Cookies.set
    case AUTHENTIFICATION_SUCCESS:
      Cookies.set('token', action.token , { expires: 7 })
      return {
        ...state,
        ...action.token,
        token: action.token,
        isAuthenticated: true,
        user: action.user
      }
    case AUTHENTIFICATION_FAIL:
    case LOGOUT_SUCCESS:
      Cookies.remove('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false
      }
    default: 
      return state
  }
}

export default authReducer;