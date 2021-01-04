import {
  TOGGLE_SIDEBAR
} from './uiTypes';

const initialState = {
  isSidebarOpen: true,
  uiConfig: {}
};

export const toggleSidebarReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        isSidebarOpen: !state.isSidebarOpen
      };

    default:
      return state;
  };
};