import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return ({email, password}) => {
    // try to sign up
    // success => update state\
    // error => show error message
  }
}

const siginIn = (dispatch) => {
  return ({email, password}) => {
    // try to sign in
    // success => update state\
    // error => show error message
  }
}

const signOut = (dispatch) => {
  return () => {
    // sign out
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {siginIn, signUp, signOut},
  {
    isSignedIn: false,
  },
)
