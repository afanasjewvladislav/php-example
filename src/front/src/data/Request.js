export const initialState = {
  users: [],
};


export const Request = (state = initialState, payload) => {
  switch (payload.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: [...payload.payload],
      };
    default:
      return state
  }
}
