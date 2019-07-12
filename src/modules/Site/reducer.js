import * as actionTypes from './actionTypes';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case `${actionTypes.CREATE_SITE}_SUCCESS`:
      return {
        ...state,
        view: {
          ...state.list,
          siteInfo: action.payload
        }
      };

    default: {
      return state;
    }
  }
}
