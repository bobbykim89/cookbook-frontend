import client from '@/config/apolloClient';
import { GET_PROFILE } from '@/queries/profileQueries';
import { createContext, useReducer } from 'react';
import { PROFILE_ERROR, PROFILE_LOADED } from '../types';
import profileReducer from './profileReducer';

export const ProfileContext = createContext();

const ProfileState = (props) => {
  const initialState = {
    profile: null,
    error: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Load Profile
  const loadProfile = async (id) => {
    try {
      const { data } = client.query({
        query: GET_PROFILE,
        variables: { id },
      });
      dispatch({
        type: PROFILE_LOADED,
        payload: data.user.profile,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: 'Failed to load profile',
      });
    }
  };

  // Create Profile

  // Update Profile

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        error: state.error,
        loadProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
