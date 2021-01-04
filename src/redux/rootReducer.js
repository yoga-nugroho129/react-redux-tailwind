import { combineReducers } from 'redux';
import { userLoginReducer } from './auth/authReducer';
import { toggleSidebarReducer } from './ui/uiReducers';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  sidebarToggle: toggleSidebarReducer
});

export default rootReducer;