import { push } from 'connected-react-router';
import * as actionTypes from './actionTypes';

export function createSiteSuccess(data) {
  return {
    type: `${actionTypes.CREATE_SITE}_SUCCESS`,
    payload: { ...data }
  };
}
export function createSite(data) {
  return function(dispatch) {
    return {
      payload: fetch('http://www.mocky.io/v2/5d275a39320000c52971bad7', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
        .then(res => res.json())
        .then(info => {
          dispatch(createSiteSuccess(info));
          dispatch(push('/'));
        })
    };
  };
}
