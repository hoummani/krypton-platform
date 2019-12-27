const UiReducer = (
  state = {
    isDashboard: true,
    isProfile: false
  },
  action
) => {
  switch (action.type) {
    case 'RENDER_DASHBOARD':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        isDashboard: action.payload
      };
      break;

    default:
      break;
  }
  return state;
};

export default UiReducer;
