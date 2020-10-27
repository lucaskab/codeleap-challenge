const INITIAL_STATE = {
  username:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'handle_username':
      return {...state, username: action.data}
    default:
      return {...state}
  }
}