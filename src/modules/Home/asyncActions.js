import * as actionTypes from './actionTypes';

export function getSiteInfoSuccess(data) {
  return {
    type: `${actionTypes.GET_SITE_INFO}_SUCCESS`,
    payload: { ...data }
  };
}
export function getSiteInfo() {
  return function(dispatch) {
    return {
      payload: fetch('http://www.mocky.io/v2/5d275a39320000c52971bad7', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then(res => res.json())
        .then(info => {
          dispatch(getSiteInfoSuccess(info));
        })
    };
  };
}
