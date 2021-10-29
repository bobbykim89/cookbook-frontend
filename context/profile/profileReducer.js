import { PROFILE_ERROR, PROFILE_LOADED } from '../types';

const profileReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
