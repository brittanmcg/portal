import * as actionTypes from './actionTypes';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case `${actionTypes.GET_SITE_INFO}_SUCCESS`:
      return {
        ...state,
        list: {
          ...state.list,
          siteData: action.payload
        }
      };

    default: {
      return state;
    }
  }
}
