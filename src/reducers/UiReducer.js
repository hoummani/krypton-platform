const UiReducer = (
  state = {
    notification: 0,
    isDashborad: true,
    isProfile: false
  },
  action
) => {
  switch (action.type) {
    case 'DASH_NOTIFY':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        notification: state.notification + 1
      };
      break;
    case 'TRIGGER_DASH':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        isDashborad: true,
        isProfile: false
      };
      break;
    case 'TRIGGER_PROFILE':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        isDashborad: false,
        isProfile: true
      };
      break;

    default:
      break;
  }
  return state;
};

export default UiReducer;
