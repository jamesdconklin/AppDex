export default (state = false, action) => {
  if (action.type.match(/^REQUEST/)) {
    return true;
  } else if (action.type.match(/^RECEIVE/)) {
    return false;
  } else {
    return state;
  }
};
