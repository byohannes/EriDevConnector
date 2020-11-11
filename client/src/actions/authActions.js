import { TEST_DISPATCH } from "./types";

// Register User
export const register = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData,
  };
};
