const SESSION_STATE = {
  notCalled: "Not Called",
  inProgress: "InProgress",
  success: "Success",
  failed: "Failed",
};
const initialSessionState = {
  session: null,
  state: SESSION_STATE.notCalled,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SESSION_STATE.success:
      return {
        state: SESSION_STATE.success,
        session: action.sessionResponse,
      };
    case SESSION_STATE.failed:
      return {
        state: SESSION_STATE.failed,
        session: null,
      };
    default:
      return state;
  }
};

export const sessionReducer = {
  reducer,
  initialSessionState,
  SESSION_STATE,
};
