import { TEST_DISPATCH } from './../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
