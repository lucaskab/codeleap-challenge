const INITIAL_STATE = {
  id:0,
  title:'',
  content:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'handle_title':
      return {...state, title: action.data}
      case 'handle_content':
      return {...state, content: action.data}
      case 'handle_id':
      return {...state, id: state.id + 1}
    default:
      return {...state}
  }
}