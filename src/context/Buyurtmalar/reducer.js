export const reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      console.log(action);
      let filtered = state[action.payload.categoria].filter(
        (data) => data.id !== action.payload.id
      );
      return { ...state, [action.payload.categoria]: filtered };
    default:
      return state;
  }
};
